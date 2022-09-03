import { Component, OnInit } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.scss']
})
export class CreateQuizComponent implements OnInit {
  form: FormGroup;
  subjects: any;
  subjectNTopics: any = null

  constructor(fb: FormBuilder, private _httpClient: HttpClient) {
    this.form = fb.group({
      topic: new FormControl([], Validators.required),
      question: new FormControl([], Validators.required),
      option1: new FormControl([], Validators.required),
      option2: new FormControl([], Validators.required),
      option3: new FormControl([], Validators.required),
      option4: new FormControl([], Validators.required),
      answer:  new FormControl([], Validators.required),
    });
  }

  ngOnInit(): void {
    this._httpClient.get('http://localhost:3000/subject').subscribe((data) => {
      console.log(data)
      this.subjectNTopics = data;
      this.subjects = Object.keys(this.subjectNTopics);
    // }, (error) => {
        // console.log(error)
    })
  }

  submit() {

    console.log(this.form.value);
    const que = {
      "question": this.form.value.question,
      "topic": this.form.value.topic,
      "options": [
        this.form.value.option1,
        this.form.value.option2,
        this.form.value.option3,
        this.form.value.option4,
      ],
      "answer": this.form.value.answer
    }
    console.log(que);
    this._httpClient.post('http://localhost:3000/question', que).subscribe((data) => {
      console.log(data)
    // }, (error) => {
        // console.log(error)
    })
  }

}
