import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: Observable<firebase.User>
  private userDetails: firebase.User = null;

  constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.user = afAuth.user;
    this.user.subscribe((user) => {
      if (user) {
        this.userDetails = user;
        console.log(user);
      } else {
        this.userDetails = null;
      }
    })
  }

  emailLogin(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    this.afAuth.auth.signOut()
      .then(_ => this.router.navigate(['/commentary']));
  }

  isLoggedIn() {
    if(this.userDetails != null)
      return true;
    return false;
  }

  userObservable() {
    return this.afAuth.user;
  }
}
