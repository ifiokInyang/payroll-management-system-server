import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

// const value = uuidv4()
@Entity({ name: 'users' })
export class User {
  //   public value = uuidv4() as string;
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  username: string;

  @Column({ unique: true })
  email: string;

  @Column({
    default: 'employee',
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

  @Column()
  status: string;

  @Column()
  isActiveStaff: boolean;

  @Column()
  createdAt: Date;
}
