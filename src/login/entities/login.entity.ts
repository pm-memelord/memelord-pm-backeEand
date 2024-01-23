import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class LogInDetail {
  @Column()
  id: string;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @PrimaryColumn()
  email: string;

  @Column()
  username: string;

  @Column()
  password: string;

}