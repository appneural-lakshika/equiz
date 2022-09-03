import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private _httpClient: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this._httpClient.get('http://localhost:3000/question').subscribe((questions: any) => {
      console.log(questions)
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
      this.quizData = data.questionSet;
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

  selectAnswer(questionIndex: number, answer: string) {
    if (!this.completedQuestions[questionIndex]) {
      this.completedQuestions[questionIndex] = {
        answer,
        duration: this.questionCountDown - this.countDown,
        isCorrect: this.quizData[questionIndex].answer === answer,
      };
      this.quizData[questionIndex].answer === answer
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
    this.router.navigate(['/review'])

    setTimeout(() => {
      this.router.navigate(['/review'])
    }, 1000)
  }

  getResult() {}
}
