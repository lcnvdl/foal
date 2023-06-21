// 3p
import { Class, FetchUser } from 'foalts2-core';
import { getRepository } from 'typeorm';

/**
 * Create a function that finds the first entity that matches some id.
 *
 * It returns undefined if no entity can be found.
 *
 * This function is usually used by:
 * - UseSessions (foalts2-core)
 * - JWTRequired (foalts2-jwt)
 * - JWTOptional (foalts2-jwt)
 *
 * @export
 * @param {(Class<{ id: number|string }>)} userEntityClass - The entity class.
 * @returns {FetchUser} The returned function expecting an id.
 */
export function fetchUser(userEntityClass: Class<{ id: number|string }>): FetchUser {
  return (id: number|string) => getRepository(userEntityClass).findOne({ id });
}
