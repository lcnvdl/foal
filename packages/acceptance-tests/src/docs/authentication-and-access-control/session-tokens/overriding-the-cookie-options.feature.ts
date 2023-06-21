// std
import { strictEqual } from 'assert';

// 3p
import * as request from 'supertest';

// FoalTS
import {
  Config, createApp, Get, HttpResponseOK, UseSessions,
} from 'foalts2-core';
import { DatabaseSession } from 'foalts2-typeorm';
import { closeTestConnection, createTestConnection, getTypeORMStorePath } from '../../../common';

describe('Feature: Overriding the cookie options', async () => {

  beforeEach(() => {
    Config.set('settings.session.store', getTypeORMStorePath());
  });

  afterEach(() => {
    Config.remove('settings.session.store');
    Config.remove('settings.session.cookie.name');
    Config.remove('settings.session.cookie.domain');
    Config.remove('settings.session.cookie.httpOnly');
    Config.remove('settings.session.cookie.path');
    Config.remove('settings.session.cookie.sameSite');
    Config.remove('settings.session.cookie.secure');
    return closeTestConnection();
  });

  it('Example: Override all options.', async () => {
    @UseSessions({ cookie: true })
    class AppController {

      async init() {
        await createTestConnection([ DatabaseSession ]);
      }

      @Get('/')
      index() {
        return new HttpResponseOK();
      }

    }

    const app = await createApp(AppController);

    Config.set('settings.session.cookie.name', 'xxx');
    Config.set('settings.session.cookie.domain', 'example.com');
    Config.set('settings.session.cookie.httpOnly', false);
    Config.set('settings.session.cookie.path', '/foo');
    Config.set('settings.session.cookie.sameSite', 'lax');
    Config.set('settings.session.cookie.secure', true);

    const response = await request(app)
      .get('/')
      .expect(200);

    strictEqual(response.get('Set-Cookie')[0].startsWith('xxx='), true);
    strictEqual(response.get('Set-Cookie')[0].includes('Domain=example.com'), true);
    strictEqual(response.get('Set-Cookie')[0].includes('httpOnly'), false);
    strictEqual(response.get('Set-Cookie')[0].includes('Path=/foo'), true);
    strictEqual(response.get('Set-Cookie')[0].includes('SameSite=Lax'), true);
    strictEqual(response.get('Set-Cookie')[0].includes('Secure;'), true);
  });

});
