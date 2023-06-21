import { Config } from 'foalts2-core';

export function getSecretOrPrivateKey(): Buffer|string {
  const secret = Config.get('settings.jwt.secret', 'string');
  if (secret) {
    const secretEncoding = Config.get('settings.jwt.secretEncoding', 'string');
    if (secretEncoding) {
      return Buffer.from(secret, secretEncoding);
    }
    return secret;
  }

  const privateKey = Config.get('settings.jwt.privateKey', 'string');
  if (privateKey) {
    return privateKey;
  }

  throw new Error(
    '[CONFIG] You must provide at least one of these configuration keys: '
    + 'settings.jwt.secret or settings.jwt.privateKey.'
  );
}
