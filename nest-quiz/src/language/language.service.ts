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
}
