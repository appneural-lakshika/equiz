import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  isLoggedIn: any = null;
  constructor(public _httpClient: HttpClient) {
    this.login();
  }

  login(user?: any) {
    if (user) {
      this._httpClient
        .get('http://localhost:3000/user/' + user.email)
        .subscribe(
          (result: any) => {
            if (result) {
              localStorage.setItem('loggedIn', JSON.stringify(result));
              this.isLoggedIn = result;
            }
            // this.quizData = questions;
          },
          (err) => {
            this._httpClient
              .post('http://localhost:3000/user', user)
              .subscribe((result: any) => {
                if (result) {
                  localStorage.setItem('loggedIn', JSON.stringify(result));
                  this.isLoggedIn = result;
                }
                // this.quizData = questions;
              });
          }
        );
    } else {
      const loggedInStr: string = localStorage.getItem('loggedIn') ?? '';
      console.log(loggedInStr);
      if (loggedInStr === '' || loggedInStr === null) {
        // this.openDialog();
      } else {
        this.isLoggedIn = JSON.parse(loggedInStr);
      }
    }
  }

  logout() {
    localStorage.removeItem('loggedIn');
    this.isLoggedIn = null;
    location.reload();
  }
}
