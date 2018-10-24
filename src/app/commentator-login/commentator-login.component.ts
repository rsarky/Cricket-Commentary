import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-commentator-login',
  templateUrl: './commentator-login.component.html',
  styleUrls: ['./commentator-login.component.scss']
})
export class CommentatorLoginComponent implements OnInit {
  email:string;
  password: string;
  showError: boolean;
  showSpinner: boolean = false;
  chooseOngoing: boolean = false;
  showNewmatch: boolean = false;
  showChoice: boolean = true;
  user;
  constructor(private auth: AuthService) {
    this.showError = false;
    this.user = this.auth.userObservable();
   }

  login() {
    this.showSpinner = true;
    this.auth.emailLogin(this.email, this.password)
      .then(_ => this.showError = false)
      .catch((error) => {
      // Handle Errors here.
      // TODO: handle incorrect username password.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode)
      if(errorCode === 'auth/user-not-found') {
        this.showError = true;
      }
      // ...
    });
  }

  ngOnInit() {
    
  }

  showOngoing() {
    this.chooseOngoing = true;
    this.showNewmatch  = false;
    this.showChoice  = false;
  }

  showNew() {
    this.chooseOngoing = false;
    this.showNewmatch = true;
    this.showChoice  = false;
  }

}
