import { IResultLive } from './../@interface/result.interface';
import { IResultPractice } from './../@interface/result.interface';
import { CreateResultDTO } from './../@dtos/create-result.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ResultService {constructor(
    @InjectModel('Live-Result') private readonly liveResultModel: Model<IResultLive>,
    @InjectModel('Practice-Result') private readonly practiceResultModel: Model<IResultLive>,
  ) {

  }
//live result
  async createLiveResult(createResultDTO: CreateResultDTO): Promise<IResultLive> {
    const createdData = await new this.liveResultModel(createResultDTO).save();
    return new Promise((resolve) => {
      resolve(createdData);
    });
  }

  async getLiveResult(): Promise<IResultLive[]> {
    const result = await this.liveResultModel.find();
    return new Promise((resolve) => {
      resolve(result);
    });
  }

  //practice result
  async createPracticeResult(createResultDTO: CreateResultDTO[]): Promise<IResultPractice[]> {
    const createdData = await this.practiceResultModel.insertMany(createResultDTO);
    return new Promise((resolve) => {
      resolve(createdData);
    });
  }

  async getPracticeResult(): Promise<IResultPractice[]> {
    const result = await this.practiceResultModel.find();
    return new Promise((resolve) => {
      resolve(result);
    });
  }
}
