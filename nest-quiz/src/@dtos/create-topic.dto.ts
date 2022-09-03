import { ApiProperty } from "@nestjs/swagger";

export class CreateTopicDTO {
  @ApiProperty({default:''})
  name: string;

@ApiProperty({default:''})
    subjectId: string;
}