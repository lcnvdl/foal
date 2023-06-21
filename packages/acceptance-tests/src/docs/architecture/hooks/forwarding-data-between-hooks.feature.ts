// 3p
import * as request from 'supertest';

// FoalTS
import { Context, controller, createApp, Get, Hook, HttpResponseOK, UserRequired } from 'foalts2-core';

describe('Feature: Forwarding data betweens hooks', () => {

  it('Example: Load and forward the org of the connected user.', async () => {

    class Org {

      static async findOneOrFail(orgId: number) {
        return new Org('Hello!');
      }

      constructor(public name: string) {}

    }

    /* ======================= DOCUMENTATION BEGIN ======================= */

    function AddOrgToContext() {
      return Hook(async ctx => {
        if (ctx.user) {
          ctx.state.org = await Org.findOneOrFail(ctx.user.orgId);
        }
      });
    }

    class ApiController {

      @Get('/org-name')
      @UserRequired()
      @AddOrgToContext()
      readOrgName(ctx: Context) {
        return new HttpResponseOK(ctx.state.org.name);
      }

    }

    /* ======================= DOCUMENTATION END ========================= */

    @Hook(ctx => { ctx.user = { orgId: 1 }; })
    class AppController {
      subControllers = [
        controller('/api', ApiController),
      ];
    }

    const app = await createApp(AppController);

    await request(app)
      .get('/api/org-name')
      .expect(200)
      .expect('Hello!');

  });

});
