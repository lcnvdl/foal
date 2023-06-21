import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { hashPassword } from 'foalts2-core';
import { UserWithPermissions } from 'foalts2-typeorm';

@Entity()
export class User extends UserWithPermissions {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  profile: string;

  async setPassword(password: string): Promise<void> {
    this.password = await hashPassword(password);
  }

}

export { Group, Permission, DatabaseSession } from 'foalts2-typeorm';