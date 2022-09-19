import { CreateResultDTO } from './../@dtos/create-result.dto';
import { Controller, Post, Body, Get, Param, Query } from '@nestjs/common';

import { ResultService } from './result.service';
import { IResultLive } from 'src/@interface/result.interface';
import { IResultPractice } from 'src/@interface/result.interface';

@Controller('result')
export class ResultController {
  constructor(private readonly resultService: ResultService) {}
  //Live result
  @Post()
  async createLiveResult(
    @Body() createResultDto: CreateResultDTO,
  ): Promise<IResultLive> {
    console.log(createResultDto);
    return await this.resultService.createLiveResult(createResultDto);
  }

  @Get(':quizId')
  async getLiveResult(
    @Param('quizId') quizId: string,
    @Query('onlyResult') onlyResult: boolean,
  ): Promise<IResultLive[]> {
    return await this.resultService.getLiveResult(quizId, onlyResult);
  }

  @Get()
  async getResults(): Promise<IResultLive[]> {
    return await this.resultService.getResults();
  }
  //practice result
  // @Post()
  // async createPracticeResult(@Body() createResultDto: CreateResultDTO[]): Promise<IResultPractice[]> {
  //   return await this.resultService.createPracticeResult(createResultDto);
  // }

  // @Get()
  // async getPracticeResult(): Promise<IResultPractice[]> {
  //   return await this.resultService.getPracticeResult();
  // }
}
