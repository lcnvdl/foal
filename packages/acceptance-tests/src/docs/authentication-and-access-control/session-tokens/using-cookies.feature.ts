// std
import { notStrictEqual, strictEqual } from 'assert';

// 3p
import * as request from 'supertest';

// FoalTS
import {
  Config,
  Context,
  controller,
  createApp,
  dependency,
  Get,
  HttpResponseOK,
  IAppController,
  Post,
  readSession,
  ServiceManager,
  Session,
  Store,
  UseSessions
} from 'foalts2-core';
import { DatabaseSession } from 'foalts2-typeorm';
import { closeTestConnection, createTestConnection, getTypeORMStorePath, readCookie, writeCookie } from '../../../common';

describe('Feature: Using cookies', () => {

  beforeEach(() => {
    Config.set('settings.session.store', getTypeORMStorePath());
  });

  afterEach(() => {
    Config.remove('settings.session.store');
    return closeTestConnection();
  });

  it('Example: Simple usage with cookies', async () => {

    let session: Session|undefined;

    /* ======================= DOCUMENTATION BEGIN ======================= */

    @UseSessions({ cookie: true })
    class ApiController {

      @dependency
      store: Store;

      @Post('/login')
      login(ctx: Context) {
        // Check the user credentials...

        // See the "authentication" section below
        // to see how to associate a user to the session.

        return new HttpResponseOK();
      }

      @Get('/products')
      readProducts(ctx: Context) {
        // ctx.session is defined.
        // Not in the documentation:
        session = ctx.session;
        return new HttpResponseOK([]);
      }

    }

    /* ======================= DOCUMENTATION END ========================= */

    class AppController implements IAppController {
      subControllers = [
        controller('/api', ApiController),
      ];

      async init() {
        await createTestConnection([ DatabaseSession ]);
      }
    }

    const cookieName = 'sessionID';

    const app = await createApp(AppController);

    strictEqual(session, undefined);

    const response = await request(app)
      .get('/api/products')
      .expect(200);

    const token = readCookie(response.get('Set-Cookie'), cookieName).value;

    notStrictEqual(session, undefined);
    strictEqual((session as unknown as Session).getToken(), token);

    const response2 = await request(app)
      .post('/api/login')
      .set('Cookie', writeCookie(cookieName, token))
      .send({})
      .expect(200);

    const token2 = readCookie(response2.get('Set-Cookie'), cookieName).value;
    strictEqual(token2, token);

  });

  it('Example: Usage with redirections', async () => {

    /* ======================= DOCUMENTATION BEGIN ======================= */

    @UseSessions({
      cookie: true,
      redirectTo: '/login'
    })
    class ApiController {

      @Get('/products')
      readProducts(ctx: Context) {
        // ctx.session is defined.
        return new HttpResponseOK([]);
      }

    }

    /* ======================= DOCUMENTATION END ========================= */

    class AppController implements IAppController {
      subControllers = [
        controller('/api', ApiController),
      ];

      async init() {
        await createTestConnection([ DatabaseSession ]);
      }
    }

    const cookieName = 'sessionID';

    const services = new ServiceManager();
    const app = await createApp(AppController, { serviceManager: services });

    const response = await request(app)
      .get('/api/products')
      .expect(200);

    const token = readCookie(response.get('Set-Cookie'), cookieName).value;

    await request(app)
      .get('/api/products')
      .set('Cookie', writeCookie(cookieName, token))
      .expect(200);

    const session = await readSession(services.get(Store), token);
    if (!session) {
      throw new Error('Session not found');
    }

    await session.destroy();

    await request(app)
      .get('/api/products')
      .set('Cookie', writeCookie(cookieName, token))
      .expect(302)
      .expect('Location', '/login');
  });

});
