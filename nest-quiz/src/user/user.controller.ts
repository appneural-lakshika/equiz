import { CreateUserDTO } from './../@dtos/create-user.dto';
import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Delete,
  UnauthorizedException,
} from '@nestjs/common';

import { UserService } from './user.service';
import { IUser } from 'src/@interface/user.interface';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDTO): Promise<IUser> {
    return await this.userService.createUser(createUserDto);
  }

  @Get()
  async getUsers(): Promise<IUser[]> {
    return await this.userService.getUsers();
  }

  @Get('/:email')
  async getOneUsers(@Param('email') email: string): Promise<IUser> {
    const user: any = await this.userService.getOneUser(email);
    if (user) {
      return user;
    } else {
      throw new UnauthorizedException('user not exists');
    }
    return user;
  }

  @Put('/:id')
  async updateUser(
    @Param('id') id: string,
    @Body() updateUserDto: CreateUserDTO,
  ): Promise<IUser> {
    return await this.userService.updateUser(id, updateUserDto);
  }

  @Delete('/:id')
  async deleteUser(@Param('id') id: string): Promise<IUser> {
    return await this.userService.deleteUser(id);
  }
}
