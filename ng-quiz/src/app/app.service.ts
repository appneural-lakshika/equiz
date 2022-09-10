import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  isLoggedIn = null;
  constructor() {
    this.login();
  }

  login() {
    const loggedInStr: string = localStorage.getItem('loggedIn') ?? '';
    console.log(loggedInStr)
    if(loggedInStr === '' || loggedInStr === null) {
      // this.openDialog();
    } else {
      this.isLoggedIn = JSON.parse(loggedInStr);
    }
  }

  logout() {
    localStorage.removeItem('loggedIn');
    this.isLoggedIn = null;
    location.reload();
  }

}
