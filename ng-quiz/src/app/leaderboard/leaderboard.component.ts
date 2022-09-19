import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss'],
})
export class LeaderboardComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'symbol'];
  dataSource: any = [];
  selectedQuiz = null;

  quizzes = [
    {
      _id: '63186505884667b2b690c3e1',
      title: 'plants',
      status: 'true',
      category: 'science ',
      description: 'nosfgskg',
      language: 'english',
      duration: 60,
      insertDate: '2022-09-07T09:29:26.455Z',
      datetime: '2022-09-07T09:29:26.455Z',
      __v: 0,
    },
  ];
  // dataSource: any = [
  //   {position: 1, name: 'Aadavan', duration: 200, symbol: '100'},

  // ];;
  constructor(
    private _httpClient: HttpClient,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.quizzes = [];
    this._httpClient
      .get('http://localhost:3000/quiz')
      .subscribe((result: any) => {
        console.log(result);
        this.quizzes = result;
        // this.quizData = questions;
      });


  }

  selectQuiz(selectedQuiz: any) {
    this.selectedQuiz = selectedQuiz;
    console.log(selectedQuiz)
    this._httpClient
      .get('http://localhost:3000/result/'+ selectedQuiz._id)
      .subscribe((result: any) => {
        console.log(result);
        this.dataSource = result;
        // this.quizzes = result.map((r: any) => {
        //   return r.quizId;
        // })
        // this.quizData = questions;
      });
  }
}
