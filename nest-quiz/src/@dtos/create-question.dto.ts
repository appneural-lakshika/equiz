import { ApiProperty } from "@nestjs/swagger";

export class CreateQuestionDTO {
  @ApiProperty()
  question: string;

  @ApiProperty()
    topic: string;

  @ApiProperty()
    options: [string];

  @ApiProperty()
    answer: string;
}