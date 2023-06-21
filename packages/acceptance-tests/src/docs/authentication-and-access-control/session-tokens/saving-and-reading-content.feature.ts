// 3p
import * as request from 'supertest';

// FoalTS
import {
  Config,
  Context,
  controller,
  createApp,
  createSession,
  Get,
  HttpResponseNoContent,
  HttpResponseOK,
  IAppController,
  Post,
  ServiceManager,
  Session,
  Store,
  UseSessions
} from 'foalts2-core';
import { DatabaseSession } from 'foalts2-typeorm';
import { closeTestConnection, createTestConnection, getTypeORMStorePath } from '../../../common';

describe('Feature: Saving and reading content', () => {

  beforeEach(() => {
    Config.set('settings.session.store', getTypeORMStorePath());
  });

  afterEach(() => {
    Config.remove('settings.session.store');
    return closeTestConnection();
  });

  it('Example: Usage with premium and free plans', async () => {

    /* ======================= DOCUMENTATION BEGIN ======================= */

    @UseSessions(/* ... */)
    class ApiController {

      @Post('/subscribe')
      subscribe(ctx: Context<any, Session>) {
        const plan = ctx.session.get<string>('plan', 'free');
        // ...
        // Not in the documentation
        return new HttpResponseOK(plan);
      }

      @Post('/choose-premium-plan')
      choosePremimumPlan(ctx: Context<any, Session>) {
        ctx.session.set('plan', 'premium');
        return new HttpResponseNoContent();
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

    const services = new ServiceManager();
    const app = await createApp(AppController, { serviceManager: services });
    const store = services.get(Store);

    const session = await createSession(store);
    await session.commit();

    await request(app)
      .post('/api/subscribe')
      .set('Authorization', `Bearer ${session.getToken()}`)
      .send()
      .expect(200)
      .expect('free');

    await request(app)
      .post('/api/choose-premium-plan')
      .set('Authorization', `Bearer ${session.getToken()}`)
      .send()
      .expect(204);

    await request(app)
      .post('/api/subscribe')
      .set('Authorization', `Bearer ${session.getToken()}`)
      .send()
      .expect(200)
      .expect('premium');
  });

  it('Example: Save content temporarily (flash sessions)', async () => {

    @UseSessions({ required: true })
    class AppController implements IAppController {

      async init() {
        await createTestConnection([ DatabaseSession ]);
      }

      @Post('/add-flash-content')
      addFlashContent(ctx: Context<undefined, Session>) {
        /* ======================= DOCUMENTATION BEGIN ======================= */
        ctx.session.set('error', 'Incorrect email or password', { flash: true });
        /* ======================= DOCUMENTATION END ========================= */

        return new HttpResponseOK();
      }

      @Get('/read-flash-content')
      readFlashContent(ctx: Context<undefined, Session>) {
        return new HttpResponseOK(
          ctx.session.get<string>('error', 'No error')
        );
      }
    }

    const services = new ServiceManager();
    const app = await createApp(AppController, { serviceManager: services });
    const store = services.get(Store);

    const session = await createSession(store);
    await session.commit();

    await request(app)
      .get('/read-flash-content')
      .set('Authorization', `Bearer ${session.getToken()}`)
      .expect(200)
      .expect('No error');

    await request(app)
      .post('/add-flash-content')
      .set('Authorization', `Bearer ${session.getToken()}`)
      .send()
      .expect(200);

    await request(app)
      .get('/read-flash-content')
      .set('Authorization', `Bearer ${session.getToken()}`)
      .expect(200)
      .expect('Incorrect email or password');

    await request(app)
      .get('/read-flash-content')
      .set('Authorization', `Bearer ${session.getToken()}`)
      .expect(200)
      .expect('No error');
  });

});
