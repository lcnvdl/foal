// 3p
import { Class, FetchUser } from 'foalts2-core';
// tslint:disable-next-line:no-unused-variable
import { getMongoRepository, ObjectID } from 'typeorm';

/**
 * Create a function that finds the first MongoDB entity that matches some id.
 *
 * It returns undefined if no entity can be found.
 *
 * This function is usually used by:
 * - UseSessions (foalts2-core)
 * - JWTRequired (foalts2-jwt)
 * - JWTOptional (foalts2-jwt)
 *
 * @export
 * @param {(Class<{ id: ObjectID }|{ _id: ObjectID }>)} userEntityClass - The entity class.
 * @returns {FetchUser} The returned function expecting an id.
 */
export function fetchMongoDBUser(userEntityClass: Class<{ id: ObjectID }|{ _id: ObjectID }>): FetchUser {
  return (id: number|string) => {
    if (typeof id === 'number') {
      throw new Error('Unexpected type for MongoDB user ID: number.');
    }
    return getMongoRepository(userEntityClass).findOne(id);
  };
}
