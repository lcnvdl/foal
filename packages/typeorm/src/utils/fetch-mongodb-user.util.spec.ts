// std
import { ServiceManager } from 'foalts2-core';
import { notStrictEqual, strictEqual } from 'assert';

// 3p
import { Column, createConnection, Entity, getConnection, getMongoManager, ObjectID, ObjectIdColumn } from 'typeorm';

// FoalTS
import { fetchMongoDBUser } from './fetch-mongodb-user.util';

describe('fetchMongoDBUser', () => {

  @Entity()
  class User {
    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    name: string;
  }

  @Entity()
  class User2 {
    @ObjectIdColumn()
    // tslint:disable-next-line:variable-name
    _id: ObjectID;

    @Column()
    name: string;
  }

  let user: User;
  let user2: User2;

  before(async () => {
    await createConnection({
      database: 'test',
      dropSchema: true,
      entities: [User, User2],
      host: 'localhost',
      port: 27017,
      synchronize: true,
      type: 'mongodb',
    });

    user = new User();
    user.name = 'foobar';
    await getMongoManager().save(user);

    user2 = new User2();
    user2.name = 'foobar2';
    await getMongoManager().save(user2);
  });

  after(() => getConnection().close());

  it('should throw an Error if the ID is a number.', async () => {
    try {
      await fetchMongoDBUser(User)(46, new ServiceManager());
      throw new Error('An error should have been thrown');
    } catch (error: any) {
      strictEqual(error.message, 'Unexpected type for MongoDB user ID: number.');
    }
  });

  it('should return the user fetched from the database (id).', async () => {
    const actual = await fetchMongoDBUser(User)(user.id.toString(), new ServiceManager());
    notStrictEqual(actual, undefined);
    strictEqual(user.id.equals(actual.id), true);
  });

  it('should return the user fetched from the database (_id).', async () => {
    const actual = await fetchMongoDBUser(User2)(user2._id.toString(), new ServiceManager());
    notStrictEqual(actual, undefined);
    strictEqual(user2._id.equals(actual._id), true);
  });

  it('should return undefined if no user is found in the database (string).', async () => {
    const actual = await fetchMongoDBUser(User)('5c584690ba14b143235f195d', new ServiceManager());
    strictEqual(actual, undefined);
  });

});
