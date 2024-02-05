import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class UserEntity {
  @Column()
  id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  user_name: string;

  @PrimaryColumn({ unique: true })
  email: string;

  @Column()
  password: string;

}