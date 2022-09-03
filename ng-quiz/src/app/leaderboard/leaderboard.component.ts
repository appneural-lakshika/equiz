import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements OnInit {

displayedColumns: string[] = ['position', 'name', 'duration', 'symbol'];
  dataSource: any = [
    {position: 1, name: 'Aadavan', duration: 200, symbol: '100'},
    {position: 2, name: 'Aadav', duration: 180, symbol: '95'},
    {position: 3, name: 'Aadarsh', duration: 170, symbol: '94'},
    {position: 4, name: 'Aadesh', duration: 160, symbol: '80'},
    {position: 5, name: 'Aadhesh', duration: 150, symbol: '78'},
    {position: 6, name: 'Aadhik', duration: 145, symbol: '75'},
    {position: 7, name: 'Aadhikesav', duration: 140, symbol: '70'},
    {position: 8, name: 'Lakshika', duration: 135, symbol: '65'},
    {position: 9, name: 'Gunjan', duration: 130, symbol: '65'},
    {position: 10, name: 'Nikhil', duration: 130, symbol: '60'},
  ];;
  constructor() { }

  ngOnInit(): void {

  }
}



