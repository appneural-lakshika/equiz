import { Component, OnInit } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-subject-topic',
  templateUrl: './create-subject-topic.component.html',
  styleUrls: ['./create-subject-topic.component.scss']
})
export class CreateSubjectTopicComponent implements OnInit {
  form: FormGroup;
  topics: any;
  subjects: any;

  constructor(fb: FormBuilder, private _httpClient: HttpClient) {
    this.form = fb.group({
      subject: new FormControl([], Validators.required),
      topicName: new FormControl([], Validators.required),
    });
  }

  ngOnInit(): void {
    this._httpClient.get('http://localhost:3000/subject').subscribe((data) => {
      console.log(data)
      this.subjects = data;
    // }, (error) => {
        // console.log(error)
    })
  }

  submit() {

    console.log(this.form.value);
    this._httpClient.post('http://localhost:3000/subject/'+this.form.value.subject+'/topic', {name: this.form.value.topicName}).subscribe((data) => {
      console.log(data)
    // }, (error) => {
        // console.log(error)
    })
  }
  options = ['history', 'java', 'python', 'data structure'];

}
