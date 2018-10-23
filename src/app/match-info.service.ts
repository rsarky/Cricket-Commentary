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

  changeInning(key: String, battingTeam: string,score) {
    this.db.object('/matches/' + key).update({
      inning: 2,
      batting: battingTeam,
      innings1: {
        runs: score.runs,
        balls: score.balls,
        overs: score.overs,
        wickets: score.wickets
      },
      score: {
        runs: 0,
        balls: 0,
        wickets: 0,
        overs: 0
      }
    });
  }

  completeMatch(key: String, score, matchWinner) {
    this.db.object('/matches/' + key).update({
      status: 'completed',
      innings2: {
        runs: score.runs,
        wickets: score.wickets,
        overs: score.overs,
        balls: score.balls
      },
      winner: matchWinner
    });
  }

  getMatches(): Observable<any> {
    return this.db.list('/matches').valueChanges();
  }

  getComments(match:Match): Observable<any[]> {
    return this.db.list('/matches/' + match.dbKey + '/comments/innings' + match.inning).valueChanges();
  }
}
