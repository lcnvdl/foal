// 3p
import * as request from 'supertest';
import { BaseEntity, Column, createConnection, Entity, getConnection, PrimaryGeneratedColumn } from 'typeorm';

// FoalTS
import { Context, createApp, HttpResponseCreated, Post } from 'foalts2-core';
import { ValidateBody } from 'foalts2-typestack';
import { IsNumber, IsString } from 'class-validator';

describe('ValidateBody hook', () => {

  @Entity()
  class Product extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsString()
    name: string;

    @Column()
    @IsNumber()
    price: number;
  }

  before(() => createConnection({
    database: 'e2e_db.sqlite',
    dropSchema: true,
    entities: [Product],
    synchronize: true,
    type: 'better-sqlite3',
  }));

  after(() => getConnection().close());

  it('should unserialize and validate HTTP request bodies', async () => {
    class AppController {
      @Post('/products')
      @ValidateBody(Product)
      async createProduct(ctx: Context) {
        const product = ctx.request.body as Product;
        await product.save();
        return new HttpResponseCreated(product);
      }
    }

    const app = await createApp(AppController);

    await request(app)
      .post('/products')
      .send({})
      .expect(400)
      .expect([
        {
          children: [],
          constraints: { isString: 'name must be a string' },
          property: 'name',
          target: {},
        },
        {
          children: [],
          constraints: { isNumber: 'price must be a number' },
          property: 'price',
          target: {},
        }
      ]);
  });
});
