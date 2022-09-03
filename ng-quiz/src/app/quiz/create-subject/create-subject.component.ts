import { Component, OnInit } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-subject',
  templateUrl: './create-subject.component.html',
  styleUrls: ['./create-subject.component.scss']
})
export class CreateSubjectComponent implements OnInit {
  form: FormGroup;
  subjects: any;

  constructor(fb: FormBuilder, private _httpClient: HttpClient) {
    this.form = fb.group({
      subjectName: new FormControl([], Validators.required),
    });
  }

  ngOnInit(): void {
    this._httpClient.get('http://localhost:3000/subject').subscribe((data) => {
      console.log(data)
      this.subjects = data;
      this.subjects = Object.keys(this.subjects);
    // }, (error) => {
        // console.log(error)
    })
  }
  submit() {
    console.log(this.form.value);
    const sub = {
      "name": this.form.value.subjectName,
    }

    console.log(sub, this.form.value);
    this._httpClient.post('http://localhost:3000/subject', sub).subscribe((data) => {
      console.log(data)
    // }, (error) => {
        // console.log(error)
    })
  }
}
