import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit {
  quizLoaded = false;
  name = 'Quiz';
  currentQuizIndex = 0;
  page = 0;
  noOfQuestionsOnPage = 5;
  questionCountDown = 60;
  countDown = this.questionCountDown;
  isPractice = true;
  correctAnswers = 0;
  wrongAnswers = 0;
  perQuestionMarks = 5;
  isMinusMarking = true;
  isMinusMarkingRatio = 1 / 3;

  quizData: any = [];

  completedQuestions: any = {};
  // quizData
  constructor(private _httpClient: HttpClient, private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._httpClient.get('http://localhost:3000/question/' + this.activeRoute.snapshot.params['id']).subscribe((questions: any) => {
      const data = {
        name: 'Quiz Xyz',
        questionSet: questions,
        questionCountDown: 60,
        // isPractice: scheduleDate ? true : false,
        perQuestionMarks: 5,
        isMinusMarking: true,
        isMinusMarkingRatio: 1 / 3,
      };
      this.name = data.name;
      this.quizData = questions;
      this.questionCountDown = data.questionCountDown;
      this.isPractice = true;
      this.perQuestionMarks = data.perQuestionMarks;
      this.isMinusMarking = data.isMinusMarking;
      this.isMinusMarkingRatio = data.isMinusMarkingRatio;
      this.quizLoaded = true;
    });

    setInterval(() => {
      this.countDown--;
      if (this.countDown === 0) {
        this.countDown = this.questionCountDown;
        this.currentQuizIndex++;
        this.currentQuizIndex % this.noOfQuestionsOnPage == 0
          ? (this.page = this.currentQuizIndex / this.noOfQuestionsOnPage)
          : '';
      }
    }, 1000);
  }

  selectAnswer(questionIndex: number, answer: string, qId: string) {
    if (!this.completedQuestions[questionIndex]) {
      this.completedQuestions[questionIndex] = {
        qId,
        answer,
        duration: this.questionCountDown - this.countDown,
        isCorrect: this.quizData[questionIndex].answerRight === answer,
      };
      this.quizData[questionIndex].answerRight === answer
        ? this.correctAnswers++
        : this.wrongAnswers++;
      setTimeout(() => {
        this.currentQuizIndex++;
        this.currentQuizIndex % this.noOfQuestionsOnPage == 0
          ? (this.page = this.currentQuizIndex / this.noOfQuestionsOnPage)
          : '';
        this.countDown = this.questionCountDown;
      }, 2000);
    }
    console.log(this.completedQuestions);
  }

  review() {
    console.log('reviewed')
    localStorage.setItem('completedQuestions', JSON.stringify(this.completedQuestions))
    this.router.navigate(['/review', this.activeRoute.snapshot.params['id']])
    setTimeout(() => {
      this.router.navigate(['/review'])
    }, 1000)
  }

  getResult() {
    let totalDuration = 0;
    Object.keys(this.completedQuestions).forEach((e:any) => totalDuration += this.completedQuestions[e].duration)
    this._httpClient.post('http://localhost:3000/result', {
      uId: '6315bd9c1967c9af029088c8',
      quizId: this.activeRoute.snapshot.params['id'],
      completedQuestions: this.completedQuestions,
      correctAnswers: this.correctAnswers,
      wrongAnswers: this.wrongAnswers,
      marksScore: this.isMinusMarking? (this.correctAnswers - this.wrongAnswers*this.isMinusMarkingRatio)*5: this.correctAnswers*5,
      timeScore: totalDuration,
      score: (this.isMinusMarking? (this.correctAnswers - this.wrongAnswers*this.isMinusMarkingRatio)*5: this.correctAnswers*5)/totalDuration
    }).subscribe((data: any) => {
    });

  }
}
