import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upcoming-quiz',
  templateUrl: './upcoming-quiz.component.html',
  styleUrls: ['./upcoming-quiz.component.scss']
})
export class UpcomingQuizComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'time', 'symbol'];
  dataSource: any = [];


  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get('http://localhost:3000/quiz').subscribe((data: any) => {
      this.dataSource = data.filter((e: any) => new Date(e.datetime).getTime() > new Date().getTime());
    })
  }

}
