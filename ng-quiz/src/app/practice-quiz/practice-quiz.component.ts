import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice-quiz',
  templateUrl: './practice-quiz.component.html',
  styleUrls: ['./practice-quiz.component.scss']
})
export class PracticeQuizComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'time', 'symbol'];
  dataSource: any = [];


  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get('http://localhost:3000/quiz').subscribe((data: any) => {
      this.dataSource = data.filter((e: any) => e.datetime == null);
    })
  }


}
