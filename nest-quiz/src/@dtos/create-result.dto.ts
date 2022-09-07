import { ApiProperty } from "@nestjs/swagger";

export class CreateResultDTO {
  @ApiProperty()
  qId: string;

  @ApiProperty()
    quizId: string;

  @ApiProperty()
    answer: [string];

  @ApiProperty()
  correctAnswers: Number;

  @ApiProperty()
    wrongAnswer: Number;

  @ApiProperty()
    score: Number;


  @ApiProperty()
  duration: Number
}