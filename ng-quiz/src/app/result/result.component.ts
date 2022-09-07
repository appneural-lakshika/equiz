import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  constructor(private _httpClient: HttpClient, private router: Router, private activeRoute: ActivatedRoute) {}
  

  ngOnInit(): void {
    this._httpClient.get('http://localhost:3000/result/'+ this.activeRoute.snapshot.params['id']).subscribe((result: any) => {
      console.log(result)
      // this.quizData = questions;
    });
  }
}