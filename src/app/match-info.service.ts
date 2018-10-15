import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Comment } from './Comment'
import { Match } from './Match';

@Injectable({
  providedIn: 'root'
})
export class MatchInfoService {
  matches: any;
  db;
  constructor(db: AngularFireDatabase) {
    this.matches = db.list('matches');
    this.db = db;
  }

  putMatch(match: Match) {
    return new Promise((resolve, reject) => {
      this.matches.push(match)
        .then((snap) => {
          resolve(snap.key);
        })
        .catch(err => {
          reject();
        });
    })
  }

  setKey(key: String) {
    this.db.object('/matches/' + key).update({dbKey: key});
  }

  pushComment(key: String, comment, inning: number) {
    return new Promise((resolve, reject) => {
      let comments = this.db.list('matches/' + key + '/comments/innings' + inning);
      comments.push(comment)
        .then(() => {
          resolve();
        })
        .catch(err => reject(err));
    });
  }

  updateScore(key: String, score: Match['score']) {
    this.db.object('/matches/' + key + '/score').set(score)
  }
}
