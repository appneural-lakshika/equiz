import { ApiProperty } from '@nestjs/swagger';

export class CreateContactDTO {
  @ApiProperty({default:'ram@34gmail.com'})
  email: string;

  @ApiProperty({ default: 'english' })
  subject: string;
}







