import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Match } from './Match';

@Injectable({
  providedIn: 'root'
})
export class MatchInfoService {
  matches: any;
  constructor(db: AngularFireDatabase) {
    this.matches = db.list('matches');
  }

  putMatch(match: Match) {
    return new Promise((resolve, reject) => {
      this.matches.push(match)
        .then(_ => {
          resolve();
        })
        .catch(err => {
          reject();
        });
    })
  }
}
