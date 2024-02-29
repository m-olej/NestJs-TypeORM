import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users', schema: 'nestjstypeorm' })
export class User {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ nullable: true })
  username: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({})
  created_at: Date;

  @Column()
  updated_at: Date;
}
