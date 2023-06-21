// 3p
import { Connection, createConnection } from 'typeorm';

// FoalTS
import { Class } from 'foalts2-core';

export function createTestConnection(entities: Class[], name?: string): Promise<Connection> {
  return createConnection({
    database: 'e2e_db.sqlite',
    dropSchema: true,
    entities,
    synchronize: true,
    type: 'better-sqlite3',
    name
  });
}
