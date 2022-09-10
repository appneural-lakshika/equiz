import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppService } from './app.service';
import { UserSignupComponent } from './user-signup/user-signup.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng-quiz';
  data: any;
  loggedIn = null;
  constructor(public dialog: MatDialog, public appService: AppService) {}

  ngOnInit() {
    console.log(this.appService.isLoggedIn);
    if(!this.appService.isLoggedIn) {
      this.openDialog()
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(UserSignupComponent, {
      width: '250px',
      data: {name: 'Ajay', email: 'ajayprajapat@live.com'},
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.data = result;
    });
  }
}
