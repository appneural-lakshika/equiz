import { Body, Controller, Post } from '@nestjs/common';
import { CreateLanguageDTO } from 'src/@dtos/create-language.dto';
import { ISubject } from 'src/@interface/subject.interface';
import { LanguageService } from './language.service';

@Controller('language')
export class LanguageController {
  constructor(private readonly languageService: LanguageService) {}

  @Post()
  async createSubject(
    @Body() createLanguageDTO: CreateLanguageDTO,
  ): Promise<ISubject> {
    return await this.languageService.createLanguage(createLanguageDTO);
  }
}
