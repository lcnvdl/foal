// 3p
import { createConnection, Entity, getConnection, getRepository } from 'typeorm';
import * as request from 'supertest';

// FoalTS
import {
  createApp,
  createService,
  createSession,
  Get,
  HttpResponseNoContent,
  UseSessions,
} from 'foalts2-core';
import {
  DatabaseSession,
  fetchUserWithPermissions,
  Group,
  Permission,
  PermissionRequired,
  TypeORMStore,
  UserWithPermissions
} from 'foalts2-typeorm';

describe('[Authorization|permissions] Users', () => {

  let app: any;
  let tokenUser1: string;
  let tokenUser2: string;

  @Entity()
  class User extends UserWithPermissions {}

  @UseSessions({ user: fetchUserWithPermissions(User), store: TypeORMStore, required: true })
  class AppController {
    @Get('/bar')
    @PermissionRequired('access-bar')
    bar() {
      return new HttpResponseNoContent();
    }

    @Get('/foo')
    @PermissionRequired('access-foo')
    foo() {
      return new HttpResponseNoContent();
    }
  }

  before(async () => {
    await createConnection({
      database: 'e2e_db.sqlite',
      dropSchema: true,
      entities: [ User, Permission, Group, DatabaseSession ],
      synchronize: true,
      type: 'better-sqlite3',
    });

    const user1 = new User();
    const user2 = new User();

    const perm = new Permission();
    perm.codeName = 'access-foo';
    perm.name = 'Foo permission';
    await getRepository(Permission).save(perm);

    const group = new Group();
    group.name = 'Administrators';
    group.codeName = 'administrators';
    group.permissions = [ perm ];
    await getRepository(Group).save(group);

    user1.userPermissions = [ perm ];
    user2.groups = [ group ];

    await getRepository(User).save([ user1, user2 ]);

    const store = createService(TypeORMStore);

    const session1 = await createSession(store);
    session1.setUser(user1);
    await session1.commit();
    tokenUser1 = session1.getToken();

    const session2 = await createSession(store);
    session2.setUser(user1);
    await session2.commit();
    tokenUser2 = session2.getToken();

    app = await createApp(AppController);
  });

  after(async () => {
    await getConnection().close();
  });

  it('cannot access protected routes if they do not have the permission.', () => {
    return Promise.all([
      request(app).get('/bar').set('Authorization', `Bearer ${tokenUser1}`).expect(403),
      request(app).get('/bar').set('Authorization', `Bearer ${tokenUser2}`).expect(403),
    ]);
  });

  it('can access protected routes if they have the permission.', () => {
    return Promise.all([
      request(app).get('/foo').set('Authorization', `Bearer ${tokenUser1}`).expect(204),
      request(app).get('/foo').set('Authorization', `Bearer ${tokenUser2}`).expect(204),
    ]);
  });

});
