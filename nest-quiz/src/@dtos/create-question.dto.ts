import { ApiProperty } from "@nestjs/swagger";

export class CreateQuestionDTO {
  @ApiProperty()
  quizId: string;

  @ApiProperty()
  question: string;

  @ApiProperty()
  topic: string;

  @ApiProperty()
  status: boolean;

  @ApiProperty()
  answerRight: string;

  @ApiProperty()
  answered: string;

  @ApiProperty()
  answers: [string];
}