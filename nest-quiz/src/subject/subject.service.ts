import { ISubject } from './../@interface/subject.interface';
import { CreateSubjectDTO } from './../@dtos/create-subject.dto';
import { ITopic } from './../@interface/topic.interface';
import { CreateTopicDTO } from './../@dtos/create-topic.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class SubjectService {
  constructor(
    @InjectModel('Subject') private readonly subjectModel: Model<ISubject>,
    @InjectModel('Topic') private readonly topicModel: Model<ITopic>,
  ) {}

  async createSubject(createSubjectDTO: CreateSubjectDTO): Promise<ISubject> {
    const createdData = await new this.subjectModel(createSubjectDTO).save();
    return new Promise((resolve) => {
      resolve(createdData);
    });
  }

  async getSubject(): Promise<any> {
    const subject = await this.subjectModel.find();
    // const subject: any = {
    //   "English" : [
    //     {
    //       "_id": "6300dcf71f564c5c8ed1f8ab",
    //       "name" : "Verbs",
    //     },
    //     {
    //       "_id": "6300dcff1f564c5c8ed1f8ad",
    //       "name" : "Nouns",
    //     },
    //    {
    //     "_id": "6300dd091f564c5c8ed1f8af",
    //          "name": "Adjectives",
    //     },
    //    {
    //     "_id": "6300dd1c1f564c5c8ed1f8b1",
    //          "name": "articles",
    //     },
    //     {
    //       "_id": "6300dd2c1f564c5c8ed1f8b3",
    //       "name": "prepositions",
    //      },
    //   ],
    //   "Maths" : [
    //     {
    //       "_id": "6300dd4e1f564c5c8ed1f8b5",
    //       "name" : "arithmatic operations",
    //     },
    //     {
    //       "_id": "6300dd5a1f564c5c8ed1f8b7",
    //       "name" : "alzebra",
    //     },
    //     {
    //       "_id": "6300dd751f564c5c8ed1f8b9",
    //       "name" : "probablity",
    //     },
    //     {
    //       "_id": "6300dd861f564c5c8ed1f8bb",
    //       "name" : "number line",
    //     }
    //   ],
    //    "Science" :[
    // {
    //   "_id": "6300ddb41f564c5c8ed1f8bd",
    //   "name": "cells",
    // },
    // {
    //   "_id": "6300ddd61f564c5c8ed1f8bf",
    //   "name": "earth",
    // },
    // {
    // "_id": "6300dde91f564c5c8ed1f8c1",
    // "name": "plants reproduction",
    // }
    // ],
    //     "Social-Science":[
    // {
    // "_id": "6300ddfd1f564c5c8ed1f8c3",
    //  "name": "mugals",
    //     },
    // {
    //  "_id": "6300de121f564c5c8ed1f8c5",
    //  "name": "the maurayas",
    // },
    // {
    // "_id": "6300de231f564c5c8ed1f8c7",
    //  "name": "enclaves",
    // }
    // ]
    // }
    return new Promise((resolve) => {
      resolve(subject);
    });
  }

  async updateSubject(id: string, data: CreateSubjectDTO): Promise<ISubject> {
    const subject = await this.subjectModel.findOneAndUpdate({ _id: id }, data);
    return new Promise((resolve) => {
      resolve(subject);
    });
  }

  async deleteSubject(id: string): Promise<any> {
    const subject = await this.subjectModel.deleteOne({ _id: id });
    return new Promise((resolve) => {
      resolve(subject);
    });
  }

  //topic
  async createTopic(subId, createTopicDTO: CreateTopicDTO): Promise<ITopic> {
    createTopicDTO.subjectId = subId;
    const createdData = await new this.topicModel(createTopicDTO).save();
    return new Promise((resolve) => {
      resolve(createdData);
    });
  }

  async getTopic(subId): Promise<ITopic[]> {
    const topic = await this.topicModel.find({ subjectId: subId });
    return new Promise((resolve) => {
      resolve(topic);
    });
  }

  async updateTopic(topicId, data: CreateTopicDTO): Promise<ITopic> {
    const topic = await this.topicModel.findOneAndUpdate(
      { _id: topicId },
      data,
    );
    return new Promise((resolve) => {
      resolve(topic);
    });
  }

  async deleteTopic(id: string): Promise<any> {
    const topic = await this.topicModel.deleteOne({ _id: id });
    return new Promise((resolve) => {
      resolve(topic);
    });
  }
}
