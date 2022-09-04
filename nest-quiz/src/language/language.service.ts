import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateLanguageDTO } from 'src/@dtos/create-language.dto';
import { ISubject } from 'src/@interface/subject.interface';

@Injectable()
export class LanguageService {
  constructor(
    @InjectModel('Language') private readonly languageModel: Model<ISubject>,
  ) {}

  async createLanguage(
    createLanguageDTO: CreateLanguageDTO,
  ): Promise<ISubject> {
    const createdData = await new this.languageModel(createLanguageDTO).save();
    return new Promise((resolve) => {
      resolve(createdData);
    });
  }
  async getLanguage(): Promise<any> {
    const language = await this.languageModel.find();
    // const language: any = {
    //     {
    //       "_id": "6300dcf71f564c5c8ed1f8ab",
    //       "name" : "Verbs",
    //     },
    //     {
    //       "_id": "6300dcff1f564c5c8ed1f8ad",
    //       "name" : "Nouns",
    //     },
    // }
    return new Promise((resolve) => {
      resolve(language);
    });
  }

  async updateLanguage(id: string, data: CreateLanguageDTO): Promise<ISubject> {
    const language = await this.languageModel.findOneAndUpdate({ _id: id }, data);
    return new Promise((resolve) => {
      resolve(language);
    });
  }

  async deleteLanguage(id: string): Promise<any> {
    const language = await this.languageModel.deleteOne({ _id: id });
    return new Promise((resolve) => {
      resolve(language);
    });
  }
  
}
