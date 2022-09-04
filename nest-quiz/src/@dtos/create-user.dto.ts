import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDTO {
  @ApiProperty({default:'ramkumar'})
  username: string;

  @ApiProperty({default:'ram@34gmail.com'})
  email: string;

  @ApiProperty({default:'Ram Kumar'})
  firstname: string;

  @ApiProperty({default:'kumar'})
  lastname: string;

}