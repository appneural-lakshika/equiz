import { QuestionSchema } from './@schemas/question.schema';
import { UserService } from "./user/user.service";
import { UserController } from "./user/user.controller";
import { UserSchema } from "./@schemas/user.schema";
import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TopicSchema } from "./@schemas/topic.schema";
import { SummarySchema } from "./@schemas/summary.schema";
import { SubjectSchema } from "./@schemas/subject.schema";
import { QuizSchema } from "./@schemas/quiz.schema";
import { PracticeResultSchema } from "./@schemas/practice-result.schema";
import { LiveResultSchema } from "./@schemas/live-result.schema";
import { SummaryController } from "./summary/summary.controller";
import { SummaryService } from "./summary/summary.service";
import { SubjectController } from "./subject/subject.controller";
import { SubjectService } from "./subject/subject.service";
import { QuizController } from "./quiz/quiz.controller";
import { QuizService } from "./quiz/quiz.service";
import { ResultController } from './result/result.controller';
import { ResultService } from './result/result.service';
import { QuestionController } from './question/question.controller';
import { QuestionService } from './question/question.service';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://ajayprajapat:bvqtJJLgnG2sS8dE@cluster0.toa6t.mongodb.net/quiz"),
    MongooseModule.forFeature([
      { name: "User", schema: UserSchema },
      { name: "Topic", schema: TopicSchema },
      { name: "Summary", schema: SummarySchema },
      { name: "Subject", schema: SubjectSchema },
      { name: "Quiz", schema: QuizSchema },
      { name: "Practice-Result", schema: PracticeResultSchema },
      { name: "Live-Result", schema: LiveResultSchema },
      { name: "Question", schema: QuestionSchema },
    ]),
  ],
  controllers: [
    AppController,
    UserController,
    SummaryController,
    SubjectController,
    QuizController,
    ResultController,
    QuestionController,
  ],
  providers: [
    AppService,
    UserService,
    SummaryService,
    SubjectService,
    QuizService,
    ResultService,
    QuestionService,
  ],
})
export class AppModule { }
