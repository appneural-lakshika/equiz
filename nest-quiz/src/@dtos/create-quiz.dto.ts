import { ApiProperty } from "@nestjs/swagger";

export class CreateQuizDTO {

  @ApiProperty()
  name: string;

  @ApiProperty()
  questionSet: [];

  @ApiProperty()
  scheduleDate: Date;

  @ApiProperty()
  questionCountdown: Number;
  
  @ApiProperty()
  perQuestionMarks: Number;

  @ApiProperty()
  isMinusMarking: Number;

  @ApiProperty()
  isMinusMarkingRatio: Number;

  @ApiProperty()
  duration: Number;

}