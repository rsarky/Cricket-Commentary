import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // console.log(this.auth.isLoggedIn());
    // if (this.auth.isLoggedIn()) {
    //   return true;
    // }
    // this.router.navigate(['/commentary']);
    // return false;
    return new Promise((resolve, reject) => {
      this.auth.isLoggedIn().then(user => {
        if(user != null) {
          resolve(true);
        } else {
          this.router.navigate(['/commentary']);
          resolve(false);
        }
      })
      .catch(err => resolve(true))
    })
  }
}
