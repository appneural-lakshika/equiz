import { IContact } from '../@interface/contact.interface';
import { CreateContactDTO } from 'src/@dtos/create-contact.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ContactService {
  constructor(
    @InjectModel('Contact') private readonly contactModel: Model<IContact>,
    // @InjectModel('Topic') private readonly topicModel: Model<ITopic>,
  ) {}

  async createContact(createContactDTO: CreateContactDTO): Promise<IContact> {
    const createdData = await new this.contactModel(createContactDTO).save();
    return new Promise((resolve) => {
      resolve(createdData);
    });
  }

  async getContact(): Promise<any> {
    const contact = await this.contactModel.find();
    // const subject: any = {
    //   "English" : [
    //     {
    //       "_id": "6300dcf71f564c5c8ed1f8ab",
    //       "name" : "Verbs",
    //     },
    // ]
    // }
    return new Promise((resolve) => {
      resolve(contact);
    });
  }

  async updateContact(id: string, data: CreateContactDTO): Promise<IContact> {
    const contact = await this.contactModel.findOneAndUpdate({ _id: id }, data);
    return new Promise((resolve) => {
      resolve(contact);
    });
  }

  async deleteContact(id: string): Promise<any> {
    const contact = await this.contactModel.deleteOne({ _id: id });
    return new Promise((resolve) => {
      resolve(contact);
    });
  }

  // //topic
  // async createTopic(subId, createTopicDTO: CreateTopicDTO): Promise<ITopic> {
  //   createTopicDTO.subjectId = subId;
  //   const createdData = await new this.topicModel(createTopicDTO).save();
  //   return new Promise((resolve) => {
  //     resolve(createdData);
  //   });
  // }

  // async getTopic(subId): Promise<ITopic[]> {
  //   const topic = await this.topicModel.find({ subjectId: subId });
  //   return new Promise((resolve) => {
  //     resolve(topic);
  //   });
  // }

  // async updateTopic(topicId, data: CreateTopicDTO): Promise<ITopic> {
  //   const topic = await this.topicModel.findOneAndUpdate(
  //     { _id: topicId },
  //     data,
  //   );
  //   return new Promise((resolve) => {
  //     resolve(topic);
  //   });
  // }

  // async deleteTopic(id: string): Promise<any> {
  //   const topic = await this.topicModel.deleteOne({ _id: id });
  //   return new Promise((resolve) => {
  //     resolve(topic);
  //   });
  // }
}
