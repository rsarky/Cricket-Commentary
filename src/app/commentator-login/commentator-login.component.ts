import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-commentator-login',
  templateUrl: './commentator-login.component.html',
  styleUrls: ['./commentator-login.component.scss']
})
export class CommentatorLoginComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth) { }

  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }
  ngOnInit() {
  }

}
