import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/UserDtos.dto';
import { UsersService } from 'src/users/services/users/users.service';
import { UpdateUserDto } from 'src/users/dtos/UserDtos.dto';

@Controller('users')
export class UsersController {
  constructor(private UserService: UsersService) {}

  @Get()
  async getUsers() {
    const users = await this.UserService.fetchUsers();
    return users;
  }

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    this.UserService.createUser(createUserDto);
  }

  @Put(':id')
  updateUserById(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.UserService.updateUser(id, updateUserDto);
  }

  @Delete(':id')
  deleteUserById(@Param('id', ParseIntPipe) id: number) {
    return this.UserService.deleteUser(id);
  }
}
