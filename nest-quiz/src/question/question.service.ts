import { CreateQuestionDTO } from './../@dtos/create-question.dto';
import { IQuestion } from './../@interface/question.interface';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class QuestionService {
constructor(
    @InjectModel('Question') private readonly questionModel: Model<IQuestion>,
  ) {

  }


async createQuestion(createQuestionDTO: CreateQuestionDTO): Promise<IQuestion> {
    const createdData = await new this.questionModel(createQuestionDTO).save();
    return new Promise((resolve) => {
      resolve(createdData);
    });
  }

  async getQuestion(topics): Promise<IQuestion[]> {
    let mdQuery;
    
    
    if(topics) {
      mdQuery ={
        topic: { $in : topics.split(',')}
      };
    } else {
      mdQuery ={
      };
    }

    const question = await this.questionModel.find(mdQuery);
    return new Promise((resolve) => {
      resolve(question);
    });
  }

  async updateQuestion(id: string, data: CreateQuestionDTO): Promise<IQuestion> {
    const question = await this.questionModel.findOneAndUpdate({ _id: id }, data);
    return new Promise((resolve) => {
      resolve(question);
    });
  }

  async deleteQuestion(id: string): Promise<any> {
    const question = await this.questionModel.deleteOne({ _id: id });
    return new Promise((resolve) => {
      resolve(question);
    });
  }

}