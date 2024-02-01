import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class UserEntity {
  @Column()
  id: string;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @PrimaryColumn({ unique: true })
  email: string;

  @Column()
  username: string;

  @Column()
  password: string;

}