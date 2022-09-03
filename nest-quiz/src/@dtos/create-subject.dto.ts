import { ApiProperty } from '@nestjs/swagger';

export class CreateSubjectDTO {
  @ApiProperty({ default: '' })
  name: string;

  @ApiProperty({ default: true })
  status: boolean;
}
