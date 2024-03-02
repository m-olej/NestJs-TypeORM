import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'profiles', schema: 'nestjstypeorm' })
export class Profile {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;

  @Column()
  dob: Date;
}
