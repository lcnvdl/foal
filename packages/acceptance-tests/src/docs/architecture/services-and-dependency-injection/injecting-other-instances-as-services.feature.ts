// 3p
import * as request from 'supertest';

// FoalTS
import { controller, createApp, dependency, Get, HttpResponseOK, IAppController, ServiceManager } from 'foalts2-core';
import { Connection, Entity, getConnection, PrimaryGeneratedColumn } from 'typeorm';
import { createTestConnection } from '../../../common';

describe('Feature: Injecting other instances as services', () => {

  afterEach(() => getConnection().close());

  it('Example: Injection a TypeORM connection', async () => {

    @Entity()
    class Product {
      @PrimaryGeneratedColumn()
      id: number;
    }

    /* ======================= DOCUMENTATION BEGIN ======================= */

    class ApiController {

      @dependency
      connection: Connection;

      @Get('/products')
      async readProducts() {
        const products = await this.connection.getRepository(Product).find();
        return new HttpResponseOK(products);
      }

    }

    /* ======================= DOCUMENTATION END ========================= */

    class AppController implements IAppController {
      subControllers = [
        controller('/api', ApiController),
      ];
    }

    /* ======================= DOCUMENTATION BEGIN ======================= */

    async function main() {
      const connection = await createTestConnection([ Product ]);

      const serviceManager = new ServiceManager();
      serviceManager.set(Connection, connection);

      return await createApp(AppController, {
        serviceManager
      });
    }

    /* ======================= DOCUMENTATION END ========================= */

    const app = await main();

    await request(app)
      .get('/api/products')
      .expect(200)
      .expect([]);
  });

});
