import { getConnection } from 'typeorm';

export function closeTestConnection(): Promise<void> {
  return getConnection().close();
}
