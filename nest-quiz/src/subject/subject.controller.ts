import { CreateSubjectDTO } from './../@dtos/create-subject.dto';
import { CreateTopicDTO } from './../@dtos/create-topic.dto';
import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Delete,
} from '@nestjs/common';

import { SubjectService } from './subject.service';
import { ISubject } from 'src/@interface/subject.interface';
import { ITopic } from 'src/@interface/topic.interface';
@Controller('subject')
export class SubjectController {
  constructor(private readonly subjectService: SubjectService) {}

  @Post()
  async createSubject(
    @Body() createSubjectDto: CreateSubjectDTO,
  ): Promise<ISubject> {
    return await this.subjectService.createSubject(createSubjectDto);
  }

  @Get()
  async getSubject(): Promise<any> {
    return await this.subjectService.getSubject();
  }
  @Put('/:id')
  async updateSubject(
    @Param('id') id: string,
    @Body() updateSubjectDto: CreateSubjectDTO,
  ): Promise<ISubject> {
    return await this.subjectService.updateSubject(id, updateSubjectDto);
  }

  @Delete('/:id')
  async deleteSubject(@Param('id') id: string): Promise<ISubject> {
    return await this.subjectService.deleteSubject(id);
  }

  //topic
  @Post(':subId/topic')
  async createTopic(
    @Param('subId') subId: string,
    @Body() createTopicDto: CreateTopicDTO,
  ): Promise<ITopic> {
    return await this.subjectService.createTopic(subId, createTopicDto);
  }

  @Get(':subId/topic')
  async getTopic(@Param('subId') subId: string): Promise<ITopic[]> {
    return await this.subjectService.getTopic(subId);
  }
  @Put(':subId/topic/:topicId')
  async updateTopic(
    @Param('subId') subId: string,
    @Param('topicId') topicId: string,
    @Body() updateTopicDto: CreateTopicDTO,
  ): Promise<ITopic> {
    return await this.subjectService.updateTopic(topicId, updateTopicDto);
  }

  @Delete('/:subId/topic/:topicId')
  async deleteTopic(@Param('topicId') topicId: string): Promise<ITopic> {
    return await this.subjectService.deleteTopic(topicId);
  }
}
