/*
Because of the way lerna and npm manage dependencies, we must add this file to use TypeORM store.
*/

export { TypeORMStore as ConcreteSessionStore } from 'foalts2-typeorm';

export function getTypeORMStorePath(): string {
  return './../src/common/typeorm-store';
}
