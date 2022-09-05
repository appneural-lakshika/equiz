import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
})
export class ReviewComponent implements OnInit {
  page = 0;
  noOfQuestionsOnPage = 5;
  isPractice = true;
  quizData: any = null;
  @Input() completedQuestions: any;

  constructor(private _httpClient: HttpClient, private router: Router, private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this._httpClient.get('http://localhost:3000/question/'+ this.activeRoute.snapshot.params['id']).subscribe((questions: any) => {
      console.log(questions)
      this.quizData = questions;
    });
    console.log(JSON.parse(localStorage.getItem('completedQuestions') || ''))
    this.completedQuestions = JSON.parse(localStorage.getItem('completedQuestions') || '')
  }
}
