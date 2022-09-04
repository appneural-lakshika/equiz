import { CreateLanguageDTO } from 'src/@dtos/create-language.dto';
import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { ISubject } from 'src/@interface/subject.interface';
import { LanguageService } from './language.service';
import { ITopic } from 'src/@interface/topic.interface';

@Controller('language')
export class LanguageController {
  constructor(private readonly languageService: LanguageService) {}

  @Post()
  async createSubject(
    @Body() createLanguageDTO: CreateLanguageDTO,
  ): Promise<ISubject> {
    return await this.languageService.createLanguage(createLanguageDTO);
  }
  @Get()
  async getSubject(): Promise<any> {
    return await this.languageService.getLanguage();
  }
  @Put('/:id')
  async updateSubject(
    @Param('id') id: string,
    @Body() updateSubjectDto: CreateLanguageDTO,
  ): Promise<ISubject> {
    return await this.languageService.updateLanguage(id, updateSubjectDto);
  }
  @Delete('/:id')
  async deleteSubject(@Param('id') id: string): Promise<ISubject> {
    return await this.languageService.deleteLanguage(id);
  }
}
