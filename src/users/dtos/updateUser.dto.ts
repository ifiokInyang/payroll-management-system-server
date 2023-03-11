import { IsEmail, IsNotEmpty } from 'class-validator';

export class UpdateUserDto {
  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsNotEmpty()
  username: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  company: string;

  @IsNotEmpty()
  salary: string;
}
