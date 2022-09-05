import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDTO {
  @ApiProperty({default:'ramkumar'})
  userName: string;

  @ApiProperty({default:'ram@34gmail.com'})
  email: string;

  @ApiProperty({default:'Ram Kumar'})
  firstName: string;

  @ApiProperty({default:'kumar'})
  lastName: string;

}