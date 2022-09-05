import { ApiProperty } from '@nestjs/swagger';

export class CreateLanguageDTO {
  @ApiProperty({ default: '' })
  email: string;

  @ApiProperty({ default: true })
  subject: string;
}
