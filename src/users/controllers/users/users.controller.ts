import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { UpdateUserDto } from 'src/users/dtos/updateUser.dto';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}
  @Get()
  async getUsers() {
    const allUsers = await this.userService.getAllUsers();
    return allUsers;
  }

  @Get(':id')
  async getUserById(@Param('id', ParseUUIDPipe) id: string) {
    const foundUser = await this.userService.getUserById(id);
    return foundUser;
  }

  @Post()
  async createUser(@Body() createUserdto: CreateUserDto) {
    const createdUser = await this.userService.createUser(createUserdto);
    return createdUser;
  }

  @Patch(':id')
  async updateUser(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateUserdto: UpdateUserDto,
  ) {
    const updatedUser = await this.userService.updateUser(id, updateUserdto);
    return updatedUser;
  }

  @Delete(':id')
  async deleteUser(@Param('id', ParseUUIDPipe) id: string) {
    const deletedUser = await this.userService.deleteUser(id);
    return deletedUser;
  }
}
