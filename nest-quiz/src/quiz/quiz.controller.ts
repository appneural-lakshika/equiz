import { CreateQuizDTO } from './../@dtos/create-quiz.dto';
import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';

import { QuizService } from './quiz.service';
import { IQuiz } from 'src/@interface/quiz.interface';

@Controller('quiz')
export class QuizController {
    constructor(private readonly quizService: QuizService) {}

  @Post()
  async createQuiz(@Body() createQuizDto: CreateQuizDTO): Promise<IQuiz> {
    return await this.quizService.createQuiz(createQuizDto);
  }

  @Get(':id')
  async getQuiz(@Param('id') id: string): Promise<IQuiz> {
    return await this.quizService.getQuiz(id);
  }

  @Get()
  async getQuizes(): Promise<IQuiz[]> {
    return await this.quizService.getQuizes();
  }

  @Put('/:id')
  async updateQuiz(@Param ('id') id: string, @Body() updateQuizDto: CreateQuizDTO): Promise<IQuiz> {
    return await this.quizService.updateQuiz(id, updateQuizDto);
  }

  @Delete('/:id')
  async deleteQuiz(@Param ('id') id: string): Promise<IQuiz> {
    return await this.quizService.deleteQuiz(id);
  }
}

