import { ApiProperty } from '@nestjs/swagger';

export class CreateLanguageDTO {
  @ApiProperty({ default: '' })
  name: string;

  @ApiProperty({ default: true })
  status: boolean;
}
