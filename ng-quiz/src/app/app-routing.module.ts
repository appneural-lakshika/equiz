import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateQuizComponent } from './quiz/create-quiz/create-quiz.component';
import { ReviewComponent } from './review/review.component';
import { UpcomingQuizComponent } from './upcoming-quiz/upcoming-quiz.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { ResultComponent } from './result/result.component';
import { QuizSelectionComponent } from './quiz-selection/quiz-selection.component';
import { QuizComponent } from './quiz/quiz.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateSubjectComponent } from './quiz/create-subject/create-subject.component';
import { CreateSubjectTopicComponent } from './quiz/create-subject-topic/create-subject-topic.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'quiz-selection',
    pathMatch: 'full'
  },
  {
    path: 'quiz-selection',
    component: QuizSelectionComponent,
  },
  {
    path: 'quiz',
    component: QuizComponent,
  },
  {
    path: 'quiz/create-quiz',
    component: CreateQuizComponent,
  },
  {
    path: 'quiz/create-subject-topic',
    component: CreateSubjectTopicComponent,
  },
  {
    path: 'quiz/create-subject',
    component: CreateSubjectComponent,
  },
  {
    path: 'review',
    component: ReviewComponent,
  },
  {
    path: 'result',
    component: ResultComponent,
  },
  {
    path: 'upcoming-quiz',
    component: UpcomingQuizComponent,
  },
  {
    path: 'leaderboard',
    component: LeaderboardComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
