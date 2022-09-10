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
  category = '';
  quiz: any;
  currentQuizIndex = 0;
  page = 0;
  noOfQuestionsOnPage = 5;
  questionCountDown = 60;
  countDown = this.questionCountDown;
  isPractice = false;
  correctAnswers = 0;
  wrongAnswers = 0;
  perQuestionMarks = 5;
  isMinusMarking = true;
  isMinusMarkingRatio = 1 / 3;

  quizData: any = [];

  completedQuestions: any = {};
  isSubmitted = false;

  // quizData
  constructor(private _httpClient: HttpClient, private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._httpClient.get('http://localhost:3000/quiz/' + this.activeRoute.snapshot.params['id']).subscribe((quiz: any) => {
      this.quiz = quiz;
      this._httpClient.get('http://localhost:3000/question/' + this.activeRoute.snapshot.params['id']).subscribe((questions: any) => {
        const data = {
          name: quiz.title,
          questionSet: questions,
          questionCountDown: 60,
          // isPractice: scheduleDate ? true : false,
          perQuestionMarks: 5,
          isMinusMarking: true,
          isMinusMarkingRatio: 1 / 3,
        };
        this.name = data.name;
        this.category = quiz.category;
        this.quizData = questions;
        this.questionCountDown = data.questionCountDown;
        this.isPractice = false;
        this.perQuestionMarks = data.perQuestionMarks;
        this.isMinusMarking = data.isMinusMarking;
        this.isMinusMarkingRatio = data.isMinusMarkingRatio;
        this.quizLoaded = true;
      });
    });



    const interval = setInterval(() => {
      this.countDown--;
      if (this.countDown === 0) {
        this.countDown = this.questionCountDown;
        this.currentQuizIndex++;
        this.currentQuizIndex % this.noOfQuestionsOnPage == 0
          ? (this.page = this.currentQuizIndex / this.noOfQuestionsOnPage)
          : '';
      }
      if(this.quizData.length === this.currentQuizIndex) {
        clearInterval(interval)
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
    this.isSubmitted = true
    Object.keys(this.completedQuestions).forEach((e:any) => totalDuration += this.completedQuestions[e].duration)
    this._httpClient.post('http://localhost:3000/result', {
      uId: '631863b6884667b2b690c3d9',
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
