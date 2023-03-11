import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User';
import { CreateUserDetails } from 'src/users/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}
  getAllUsers() {
    return this.userRepository.find();
  }

  async createUser(userInput: CreateUserDetails) {
    const newUser = this.userRepository.create({
      ...userInput,
      createdAt: new Date(),
    });
    return await this.userRepository.save(newUser);
  }
}
