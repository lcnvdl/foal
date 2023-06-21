import { Config, Context } from 'foalts2-core';
import { JWTOptions } from '../jwt.hook';

export function shouldVerifyCsrfToken(request: Context['request'], options: JWTOptions): boolean {
  return (
    options.cookie === true &&
    (options.csrf ?? Config.get('settings.jwt.csrf.enabled', 'boolean', false)) &&
    [ 'DELETE', 'PATCH', 'POST', 'PUT' ].includes(request.method)
  );
}