import { IQuestion } from 'src/@interface/question.interface';
import { CreateQuestionDTO } from './../@dtos/create-question.dto';
import { Controller, Post, Body, Get, Param, Put, Delete, Query } from '@nestjs/common';

import { QuestionService } from './question.service';


@Controller('question')
export class QuestionController {
    constructor(private readonly questionService: QuestionService) {}

  @Post('/:id')
  async createquestion(@Param('id') id: string, @Body() createQuestionDto: CreateQuestionDTO): Promise<IQuestion> {
    createQuestionDto.quizId = id;
    return await this.questionService.createQuestion(createQuestionDto);
  }

  @Get()
  async getQuestion(): Promise<IQuestion[]> {
    return await this.questionService.getQuestion();
  }

  @Get('/:id')
  async getQuizQuestion(@Param('id') quizId: string): Promise<IQuestion[]> {
    return await this.questionService.getQuestion(quizId);
  }

  @Put('/:id')
  async updateQuestion(@Param ('id') id: string, @Body() updateQuestionDto: CreateQuestionDTO): Promise<IQuestion> {
    return await this.questionService.updateQuestion(id, updateQuestionDto);
  }

  @Delete('/:id')
  async deleteQuestion(@Param ('id') id: string): Promise<IQuestion> {
    return await this.questionService.deleteQuestion(id);
  }
}

