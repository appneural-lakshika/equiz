import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppService } from '../app.service';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.scss']
})
export class UserSignupComponent implements OnInit {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  data = {name: 'Lakshika', email: 'lakshika@appneural.com'};
  matcher = new MyErrorStateMatcher();
  constructor(
    public appService:AppService
    // public dialogRef: MatDialogRef<UserSignupComponent>,
    // @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  onNoClick(name: any, email: any): void {
      console.log(name, email)
      this.appService.login({name, email});
    // this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
