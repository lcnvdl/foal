import { Context } from 'foalts2-core';

export function getCsrfTokenFromRequest(request: Context['request']): string|undefined {
  return request.body._csrf || request.get('X-CSRF-Token') || request.get('X-XSRF-Token');
}