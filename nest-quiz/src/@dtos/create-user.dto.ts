import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDTO {
  @ApiProperty({default:'Ram'})
  name: string;

  @ApiProperty({default:'ram@34gmail.com'})
  email: string;

}