import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  username: string;

  @Column({ unique: true })
  email: string;

  @Column({
    default: 'employee',
    select: false,
  })
  password: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  company: string;

  @Column()
  salary: string;

  @Column({ nullable: true, default: 'paid' })
  status: string;

  @Column({ default: true })
  isActiveStaff: boolean;

  @Column()
  createdAt: Date;
}
