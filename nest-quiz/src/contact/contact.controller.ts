
// import { CreateTopicDTO } from '../@dtos/create-topic.dto';
import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Delete,
} from '@nestjs/common';

import { ContactService } from './contact.service';
import { IContact } from 'src/@interface/contact.interface';
import { CreateContactDTO } from '../@dtos/create-contact.dto';
// import { ITopic } from 'src/@interface/topic.interface';
@Controller('contact')
export class ContactController {
  [x: string]: any;
  constructor(private readonly ContactService: ContactService) {}

  @Post()
  async createContact(
    @Body() createContactDto: CreateContactDTO,
  ): Promise<IContact> {
    return await this.contactService.createContact(CreateContactDTO);
  }

  @Get()
  async getContact(): Promise<any> {
    return await this.contactService.getContact();
  }
  // @Put('/:id')
  // async updateSubject(
  //   @Param('id') id: string,
  //   @Body() updateContactDto: CreateContactDTO,
  // ): Promise<IContact> {
  //   return await this.contactService.updateSubject(id, updateContactDto);
  // }

  // @Delete('/:id')
  // async deleteSubject(@Param('id') id: string): Promise<IContact> {
  //   return await this.contactService.deleteSubject(id);
  // }

  // //topic
  // @Post(':subId/topic')
  // async createTopic(
  //   @Param('subId') subId: string,
  //   @Body() createTopicDto: CreateTopicDTO,
  // ): Promise<ITopic> {
  //   return await this.subjectService.createTopic(subId, createTopicDto);
  // }

  // @Get(':subId/topic')
  // async getTopic(@Param('subId') subId: string): Promise<ITopic[]> {
  //   return await this.subjectService.getTopic(subId);
  // }
  // @Put(':subId/topic/:topicId')
  // async updateTopic(
  //   @Param('subId') subId: string,
  //   @Param('topicId') topicId: string,
  //   @Body() updateTopicDto: CreateTopicDTO,
  // ): Promise<ITopic> {
  //   return await this.subjectService.updateTopic(topicId, updateTopicDto);
  // }

  // @Delete('/:subId/topic/:topicId')
  // async deleteTopic(@Param('topicId') topicId: string): Promise<ITopic> {
  //   return await this.subjectService.deleteTopic(topicId);
  // }
}
