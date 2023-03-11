import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}
  @Get()
  getUsers() {
    return this.userService.getAllUsers();
  }

  @Post()
  createUser(@Body() createUserdto: CreateUserDto) {
    return this.userService.createUser(createUserdto);
  }
}
