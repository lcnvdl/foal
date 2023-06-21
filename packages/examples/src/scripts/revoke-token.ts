// 3p
import { createService } from 'foalts2-core';
import { TypeORMStore } from 'foalts2-typeorm';
import { createConnection } from 'typeorm';

export const schema = {
  additionalProperties: false,
  properties: {
    token: { type: 'string' }
  },
  required: [ 'token' ],
  type: 'object',
};

export async function main({ token }: { token: string }) {
  await createConnection(require('../../ormconfig.json'));
  await createService(TypeORMStore).destroy(token);
}
