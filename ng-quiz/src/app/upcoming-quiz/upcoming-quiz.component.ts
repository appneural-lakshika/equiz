import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upcoming-quiz',
  templateUrl: './upcoming-quiz.component.html',
  styleUrls: ['./upcoming-quiz.component.scss']
})
export class UpcomingQuizComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'time', 'symbol'];
  dataSource: any = [
    {position: 1, name: 'Cells', time: 80, symbol: 'link@kjfa'},
    {position: 2, name: 'Verbs', time: 180, symbol: 'link@kjfa'},
    {position: 3, name: 'Prepositions', time: 170, symbol: 'link@kjfa'},
    {position: 4, name: 'poems', time: 160, symbol: 'link@kjfa'},
    {position: 5, name: 'earth', time: 150, symbol: 'link@kjfa'},
    {position: 6, name: 'the mugals', time: 145, symbol: 'link@kjfa'},
    {position: 7, name: 'the maurayas', time: 140, symbol: 'link@kjfa'},
    {position: 8, name: 'plants reproduction', time: 135, symbol: 'link@kjfa'},
    {position: 9, name: 'adjectives', time: 130, symbol: 'link@kjfa'},
    {position: 10, name: 'articles', time: 130, symbol: 'link@kjfa'},
  ];;


  constructor() { }

  ngOnInit(): void {
  }

}
