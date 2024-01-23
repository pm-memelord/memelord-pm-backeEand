import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class LogInDetail {
  @PrimaryColumn()
  id: string;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  email: string;

  @Column()
  username: string;

  @Column()
  password: string;

}