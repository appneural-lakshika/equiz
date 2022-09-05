import { ApiProperty } from "@nestjs/swagger";

export class  CreateQuizDTO {

  @ApiProperty()
  title: string;

  @ApiProperty()
  status: string;

  @ApiProperty()
  category: string;
  
  @ApiProperty()
  description: string;

  @ApiProperty()
  duration: Number;

  @ApiProperty()
  language: string;
  
  @ApiProperty()
  insertDate: Date;

  @ApiProperty()
  datetime: Date;
}
