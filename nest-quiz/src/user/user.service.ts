import { IUser } from './../@interface/user.interface';
import { CreateUserDTO } from './../@dtos/create-user.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<IUser>) {}

  async createUser(createUserDTO: CreateUserDTO): Promise<IUser> {
    const createdData = await new this.userModel(createUserDTO).save();
    return new Promise((resolve) => {
      resolve(createdData);
    });
  }

  async getUsers(): Promise<IUser[]> {
    const users = await this.userModel.find();
    return new Promise((resolve) => {
      resolve(users);
    });
  }

  async getOneUser(email: string): Promise<IUser> {
    const user = await this.userModel.findOne({ email });
    return new Promise((resolve) => {
      resolve(user);
    });
  }

  async updateUser(id: string, data: CreateUserDTO): Promise<IUser> {
    const user = await this.userModel.findOneAndUpdate({ _id: id }, data);
    return new Promise((resolve) => {
      resolve(user);
    });
  }

  async deleteUser(id: string): Promise<any> {
    const user = await this.userModel.deleteOne({ _id: id });
    return new Promise((resolve) => {
      resolve(user);
    });
  }
}
