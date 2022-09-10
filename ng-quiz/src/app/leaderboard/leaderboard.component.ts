import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements OnInit {

displayedColumns: string[] = [ 'name', 'symbol'];
dataSource:  any = [];
  // dataSource: any = [
  //   {position: 1, name: 'Aadavan', duration: 200, symbol: '100'},
  //   {position: 2, name: 'Aadav', duration: 180, symbol: '95'},
  //   {position: 3, name: 'Aadarsh', duration: 170, symbol: '94'},
  //   {position: 4, name: 'Aadesh', duration: 160, symbol: '80'},
  //   {position: 5, name: 'Aadhesh', duration: 150, symbol: '78'},
  //   {position: 6, name: 'Aadhik', duration: 145, symbol: '75'},
  //   {position: 7, name: 'Aadhikesav', duration: 140, symbol: '70'},
  //   {position: 8, name: 'Lakshika', duration: 135, symbol: '65'},
  //   {position: 9, name: 'Gunjan', duration: 130, symbol: '65'},
  //   {position: 10, name: 'Nikhil', duration: 130, symbol: '60'},
  // ];;
  constructor(private _httpClient: HttpClient, private router: Router, private activeRoute: ActivatedRoute) {}


  ngOnInit(): void {
    this._httpClient.get('http://localhost:3000/result/63186505884667b2b690c3e1').subscribe((result: any) => {
      console.log(result)
      this.dataSource = result
      // this.quizData = questions;
    });

  }
}



