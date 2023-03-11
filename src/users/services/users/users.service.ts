import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User';
import { CreateUserDetails, UpdateUserDetails } from 'src/users/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}
  async getAllUsers() {
    const users = await this.userRepository.findAndCount();
    return users;
  }

  async getUserById(id: string) {
    const user = await this.userRepository.findOne({
      where: {
        id,
      },
    });
    if (!user) {
      throw new HttpException('user does not exist', HttpStatus.BAD_REQUEST);
    }
    return user;
  }

  async createUser(userInput: CreateUserDetails) {
    const user = await this.userRepository.findOne({
      where: {
        email: userInput.email,
      },
    });
    if (user)
      throw new HttpException(
        'this email already exists in our records, kindly enter a new email',
        HttpStatus.BAD_REQUEST,
      );
    const newUser = this.userRepository.create({
      ...userInput,
      createdAt: new Date(),
    });
    return await this.userRepository.save(newUser);
  }

  async updateUser(id: string, updateDetails: UpdateUserDetails) {
    const isEmail = await this.userRepository.findOne({
      where: {
        id,
      },
    });
    if (isEmail.email === updateDetails.email) {
      throw new HttpException(
        'this email already exist',
        HttpStatus.BAD_REQUEST,
      );
    }
    await this.userRepository.update({ id }, { ...updateDetails });

    const isUpdatedUser = await this.userRepository.findOne({
      where: {
        email: updateDetails.email,
      },
    });
    return isUpdatedUser;
  }

  async deleteUser(id: string) {
    const isUser = await this.userRepository.findOne({
      where: {
        id,
      },
    });
    if (!isUser)
      throw new HttpException('user does not exist', HttpStatus.BAD_REQUEST);
    await this.userRepository.delete(id);
    return { message: 'Successfully deleted user' };
  }
}
