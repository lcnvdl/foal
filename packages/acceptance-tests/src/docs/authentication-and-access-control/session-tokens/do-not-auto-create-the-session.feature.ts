// std
import { strictEqual } from 'assert';

// 3p
import * as request from 'supertest';

// FoalTS
import {
  Config,
  Context,
  controller,
  createApp,
  createSession,
  dependency,
  HttpResponseOK,
  IAppController,
  Post,
  Store,
  UseSessions
} from 'foalts2-core';
import { DatabaseSession } from 'foalts2-typeorm';
import { closeTestConnection, createTestConnection, getTypeORMStorePath } from '../../../common';

describe('Feature: Do not Auto-Create the Session when using sessions with cookies', async () => {

  beforeEach(() => {
    Config.set('settings.session.store', getTypeORMStorePath());
  });

  afterEach(() => {
    Config.remove('settings.session.store');
    return closeTestConnection();
  });

  it('Example: Simple usage.', async () => {

    let alreadyExists = true;

    /* ======================= DOCUMENTATION BEGIN ======================= */

    class ApiController {
      @dependency
      store: Store;

      @Post('/login')
      @UseSessions({ cookie: true, create: false })
      async login(ctx: Context) {
        // Check the credentials...

        // ctx.session is potentially undefined
        if (!ctx.session) {
          // Not in the documentation:
          alreadyExists = false;
          ctx.session = await createSession(this.store);
        }

        return new HttpResponseOK();
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

    const app = await createApp(AppController);

    strictEqual(alreadyExists, true);

    const response = await request(app)
      .post('/api/login')
      .send()
      .expect(200);

    strictEqual(alreadyExists, false);
    strictEqual(response.get('Set-Cookie').length, 1);
  });

});
