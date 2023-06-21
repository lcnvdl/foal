// std
import { notStrictEqual, strictEqual } from 'assert';

// 3p
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import * as request from 'supertest';

// FoalTS
import {
  Config,
  Context,
  controller,
  createApp,
  createSession,
  dependency,
  Get,
  HttpResponseOK,
  IAppController,
  Post,
  ServiceManager,
  Store,
  UserRequired,
  UseSessions
} from 'foalts2-core';
import { DatabaseSession, fetchUser } from 'foalts2-typeorm';
import { closeTestConnection, createTestConnection, getTypeORMStorePath, readCookie, writeCookie } from '../../../common';

describe('Feature: Adding authentication and access control', () => {

  beforeEach(() => {
    Config.set('settings.session.store', getTypeORMStorePath());
  });

  afterEach(() => {
    Config.remove('settings.session.store');
    return closeTestConnection();
  });

  it('Example: Simple authentication', async () => {

    let user: User|undefined;

    @Entity()
    class User extends BaseEntity {
      @PrimaryGeneratedColumn()
      id: number;
    }

    /* ======================= DOCUMENTATION BEGIN ======================= */

    @UseSessions({
      // If the session is attached to a user,
      // then use "fetchUser" to retrieve the user from the database
      // and assign it to ctx.user
      user: fetchUser(User)
    })
    class ApiController {

      @dependency
      store: Store;

      @Post('/login')
      async login(ctx: Context) {
        // Check the user credentials...
        // const user = ...
        // Not in the documentation
        const user = await User.findOneOrFail(ctx.request.query.id);

        ctx.session = await createSession(this.store);

        // Attach the user to the session.
        ctx.session.setUser(user);

        return new HttpResponseOK({
          token: ctx.session.getToken()
        });
      }

      @Get('/products')
      readProducts(ctx: Context) {
        // If the ctx.session is defined and the session is attached to a user
        // then ctx.user is an instance of User. Otherwise it is undefined.
        // Not in the documentation
        user = ctx.user;
        return new HttpResponseOK([]);
      }

    }

    /* ======================= DOCUMENTATION END ========================= */

    class AppController implements IAppController {
      subControllers = [
        controller('/api', ApiController),
      ];

      async init() {
        await createTestConnection([ DatabaseSession, User ]);
      }
    }

    const app = await createApp(AppController);

    const user2 = new User();
    await user2.save();

    strictEqual(user, undefined);

    await request(app)
      .get('/api/products')
      .expect(200)
      .expect([]);

    strictEqual(user, undefined);

    const response = await request(app)
      .post(`/api/login?id=${user2.id}`)
      .send({})
      .expect(200);

    strictEqual(user, undefined);

    const token: undefined|string = response.body.token;
    if (token === undefined) {
      throw new Error('The server should have returned a session token.');
    }

    await request(app)
      .get('/api/products')
      .set('Authorization', `Bearer ${token}`)
      .expect(200)
      .expect([]);

    notStrictEqual(user, undefined);
    strictEqual((user as unknown as User).id, user2.id);

  });

  it('Example: Usage with access control', async () => {

    @Entity()
    class User extends BaseEntity {
      @PrimaryGeneratedColumn()
      id: number;
    }

    /* ======================= DOCUMENTATION BEGIN ======================= */

    @UseSessions({
      user: fetchUser(User)
    })
    class ApiController {

      @Get('/products')
      @UserRequired()
      readProducts(ctx: Context) {
        // ctx.user is defined.
        return new HttpResponseOK([]);
      }

    }

    /* ======================= DOCUMENTATION END ========================= */

    class AppController implements IAppController {
      subControllers = [
        controller('/api', ApiController),
      ];

      async init() {
        await createTestConnection([ DatabaseSession, User ]);
      }
    }

    const services = new ServiceManager();
    const app = await createApp(AppController, { serviceManager: services });

    const user = new User();
    await user.save();

    const session = await createSession(services.get(Store));
    await session.commit();

    const session2 = await createSession(services.get(Store));
    session2.setUser(user);
    await session2.commit();

    await request(app)
      .get('/api/products')
      .set('Authorization', `Bearer ${session.getToken()}`)
      .expect(401);

    await request(app)
      .get('/api/products')
      .set('Authorization', `Bearer ${session2.getToken()}`)
      .expect(200)
      .expect([]);
  });

  it('Example: Usage with redirections', async () => {

    @Entity()
    class User extends BaseEntity {
      @PrimaryGeneratedColumn()
      id: number;
    }

    /* ======================= DOCUMENTATION BEGIN ======================= */

    @UseSessions({
      redirectTo: '/login',
      user: fetchUser(User)
    })
    class ApiController {

      @Get('/products')
      @UserRequired({
        redirectTo: '/login'
      })
      readProducts(ctx: Context) {
        // ctx.user is defined.
        return new HttpResponseOK([]);
      }

    }

    /* ======================= DOCUMENTATION END ========================= */

    class AppController implements IAppController {
      subControllers = [
        controller('/api', ApiController),
      ];

      async init() {
        await createTestConnection([ DatabaseSession, User ]);
      }
    }

    const services = new ServiceManager();
    const app = await createApp(AppController, { serviceManager: services });

    const user = new User();
    await user.save();

    const session = await createSession(services.get(Store));
    await session.commit();

    const session2 = await createSession(services.get(Store));
    session2.setUser(user);
    await session2.commit();

    await request(app)
      .get('/api/products')
      .set('Authorization', `Bearer ${session.getToken()}`)
      .expect(302)
      .expect('Location', '/login');

    await request(app)
      .get('/api/products')
      .set('Authorization', `Bearer ${session2.getToken()}`)
      .expect(200)
      .expect([]);

  });

  it('Example: Reading user information on the client', async () => {

    @Entity()
    class User extends BaseEntity {
      @PrimaryGeneratedColumn()
      id: number;

      @Column()
      email: string;

      @Column()
      isAdmin: boolean;
    }

    @Entity()
    class Product extends BaseEntity {
      @PrimaryGeneratedColumn()
      id: number;

      @ManyToOne(() => User)
      owner: User;
    }

    /* ======================= DOCUMENTATION BEGIN ======================= */

    function userToJSON(user: User|undefined) {
      if (!user) {
        return 'null';
      }

      return JSON.stringify({
        email: user.email,
        isAdmin: user.isAdmin
      });
    }

    @UseSessions({
      cookie: true,
      user: fetchUser(User),
      userCookie: (ctx, services) => userToJSON(ctx.user)
    })
    class ApiController {

      @Get('/products')
      @UserRequired()
      async readProducts(ctx: Context) {
        const products = await Product.find({ owner: ctx.user });
        return new HttpResponseOK(products);
      }

    }

    /* ======================= DOCUMENTATION END ========================= */

    class AppController implements IAppController {
      subControllers = [
        controller('/api', ApiController),
      ];

      async init() {
        await createTestConnection([ DatabaseSession, User, Product ]);
      }
    }

    const services = new ServiceManager();
    const app = await createApp(AppController, { serviceManager: services });

    const user = new User();
    user.email = 'foo@foalts.org';
    user.isAdmin = true;
    await user.save();

    const product1 = new Product();
    await product1.save();

    const product2 = new Product();
    product2.owner = user;
    await product2.save();

    const session = await createSession(services.get(Store));
    await session.commit();

    const session2 = await createSession(services.get(Store));
    session2.setUser(user);
    await session2.commit();

    await request(app)
      .get('/api/products')
      .set('Cookie', writeCookie('sessionID', session.getToken()))
      .expect(401)
      .then(response => {
        const { value } = readCookie(response.get('Set-Cookie'), 'user');
        strictEqual(value, 'null');
      });

    await request(app)
      .get('/api/products')
      .set('Cookie', writeCookie('sessionID', session2.getToken()))
      .expect(200)
      .expect([
        { id: product2.id }
      ])
      .then(response => {
        const { value } = readCookie(response.get('Set-Cookie'), 'user');
        strictEqual(
          value,
          encodeURIComponent(JSON.stringify({
            email: 'foo@foalts.org',
            isAdmin: true
          }))
        );
      });
  });

});
