import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  questions =[
    {Q:1,question:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, et.', your_ans:'adipisicing elit. ',right_ans:'Repellendus, et.'},
    {Q:2,question:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, et.', your_ans:'adipisicing elit. Repellendus, et.',right_ans:'Repellendus, et.'},
    {Q:3,question:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, et.', your_ans:'adipisicing elit. Repellendus, et.',right_ans:'Repellendus, et.'},
    {Q:4,question:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, et.', your_ans:'adipisicing elit. Repellendus, et.',right_ans:'Repellendus, et.'},
    {Q:5,question:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, et.', your_ans:'adipisicing elit. Repellendus, et.',right_ans:'Repellendus, et.'},
    {Q:6,question:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, et.', your_ans:'adipisicing elit. Repellendus, et.',right_ans:'Repellendus, et.'},
    {Q:7,question:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, et.', your_ans:'adipisicing elit. Repellendus, et.',right_ans:'Repellendus, et.'},
    {Q:8,question:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, et.', your_ans:'adipisicing elit. Repellendus, et.',right_ans:'Repellendus, et.'},
    {Q:9,question:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, et.', your_ans:'adipisicing elit. Repellendus, et.',right_ans:'Repellendus, et.'},
    {Q:10,question:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, et.', your_ans:'adipisicing elit. Repellendus, et.',right_ans:'Repellendus, et.'},
    {Q:11,question:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, et.', your_ans:'adipisicing elit. Repellendus, et.',right_ans:'Repellendus, et.'},
    {Q:12,question:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, et.', your_ans:'adipisicing elit. Repellendus, et.',right_ans:'Repellendus, et.'},
    {Q:13,question:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, et.', your_ans:'adipisicing elit. Repellendus, et.',right_ans:'Repellendus, et.'},
    {Q:14,question:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, et.', your_ans:'adipisicing elit. Repellendus, et.',right_ans:'Repellendus, et.'},
    {Q:15,question:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, et.', your_ans:'adipisicing elit. Repellendus, et.',right_ans:'Repellendus, et.'},
    {Q:16,question:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, et.', your_ans:'adipisicing elit. Repellendus, et.',right_ans:'Repellendus, et.'},
    {Q:17,question:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, et.', your_ans:'adipisicing elit. Repellendus, et.',right_ans:'Repellendus, et.'},
    {Q:18,question:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, et.', your_ans:'adipisicing elit. Repellendus, et.',right_ans:'Repellendus, et.'},
    {Q:19,question:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, et.', your_ans:'adipisicing elit. Repellendus, et.',right_ans:'Repellendus, et.'},
    {Q:20,question:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, et.', your_ans:'adipisicing elit. Repellendus, et.',right_ans:'Repellendus, et.'},
    {Q:21,question:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, et.', your_ans:'adipisicing elit. Repellendus, et.',right_ans:'Repellendus, et.'},
    {Q:22,question:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, et.', your_ans:'adipisicing elit. Repellendus, et.',right_ans:'Repellendus, et.'},
    {Q:23,question:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, et.', your_ans:'adipisicing elit. Repellendus, et.',right_ans:'Repellendus, et.'},
    {Q:24,question:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, et.', your_ans:'adipisicing elit. Repellendus, et.',right_ans:'Repellendus, et.'},
    {Q:25,question:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, et.', your_ans:'adipisicing elit. Repellendus, et.',right_ans:'Repellendus, et.'},
    {Q:26,question:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, et.', your_ans:'adipisicing elit. Repellendus, et.',right_ans:'Repellendus, et.'},
    {Q:27,question:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, et.', your_ans:'adipisicing elit. Repellendus, et.',right_ans:'Repellendus, et.'},
    {Q:28,question:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, et.', your_ans:'adipisicing elit. Repellendus, et.',right_ans:'Repellendus, et.'},
    {Q:29,question:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, et.', your_ans:'adipisicing elit. Repellendus, et.',right_ans:'Repellendus, et.'},
    {Q:30,question:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, et.', your_ans:'adipisicing elit. Repellendus, et.',right_ans:'Repellendus, et.'},
  ];
  name = "Mukesh";
  quizType= 'Online';
  topicName = "GK";
  totalQuestion = 30;
  attemptQuestion = 20;
  wongAnswer = 10;
  rightAnswer = 10;
}
