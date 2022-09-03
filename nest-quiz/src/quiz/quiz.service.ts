import { IQuiz } from './../@interface/quiz.interface';
import { CreateQuizDTO } from './../@dtos/create-quiz.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class QuizService {
constructor(
    @InjectModel('Quiz') private readonly quizModel: Model<IQuiz>,
  ) {

  }


async createQuiz(createQuizDTO: CreateQuizDTO): Promise<IQuiz> {
    const createdData = await new this.quizModel(createQuizDTO).save();
    return new Promise((resolve) => {
      resolve(createdData);
    });
  }

  async getQuiz(): Promise<IQuiz[]> {
    const quiz = await this.quizModel.find();
    return new Promise((resolve) => {
      resolve(quiz);
    });
  }

  async updateQuiz(id: string, data: CreateQuizDTO): Promise<IQuiz> {
    const quiz = await this.quizModel.findOneAndUpdate({ _id: id }, data);
    return new Promise((resolve) => {
      resolve(quiz);
    });
  }

  async deleteQuiz(id: string): Promise<any> {
    const quiz = await this.quizModel.deleteOne({ _id: id });
    return new Promise((resolve) => {
      resolve(quiz);
    });
  }

}