import { ApiProperty } from "@nestjs/swagger";

export class CreateResultDTO {
  @ApiProperty()
  userId: string;

  @ApiProperty()
    quizId: string;

  @ApiProperty()
    answer: [string];

  @ApiProperty()
    duration: Number;

  @ApiProperty()
    score: Number;
}