import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Comment } from '../Comment';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Match } from '../Match';
import { MatchInfoService } from '../match-info.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-comment-entry',
  templateUrl: './comment-entry.component.html',
  styleUrls: ['./comment-entry.component.scss']
})
export class CommentEntryComponent implements OnInit {
  @Input() match: Match;
  @Input() matchKey;
  database: MatchInfoService;
  comment: Comment;
  battingTeam: string;
  bowlingTeam: string;
  comments;
  ref;
  runsThisBall: number;
  extra: boolean;
  constructor(db: MatchInfoService, public router: Router) {
    this.comment = new Comment();
    this.database = db;
    this.extra = false;
  }

  ngOnInit() {
    this.runsThisBall = 0;
    this.comment.over = this.match.score.overs;
    this.comment.ball = this.match.score.balls === 6 ? 1 : this.match.score.balls + 1;
  }

  onSubmit() {
    this.database.pushComment(this.matchKey, this.comment, this.match.inning)
      .then(() => {
        this.comment.comment = "";
        if(!this.extra) {
          if(this.comment.ball === 6) {
            this.comment.over++;
            this.comment.ball = 0;
          } else {
            this.comment.ball++;
          }
        } else {
          this.extra = false;
        }   
      })
      .catch((err) => {
        console.log(err);
      })
      this.match.score.overs = this.comment.over;
      this.match.score.balls = this.comment.ball;
      this.match.score.runs += this.runsThisBall;
      this.runsThisBall = 0;
      this.database.updateScore(this.matchKey, this.match.score)
  }

  nextInning() {
    this.match.inning = 2;
    let battingTeam = this.match.batting == this.match.team1 ? this.match.team2 : this.match.team1;
    this.database.changeInning(this.matchKey,battingTeam,this.match.score)
    this.reset();
  }

  endMatch() {
    this.match.status = 'completed';
    this.database.completeMatch(this.matchKey,this.match.score);
    this.router.navigateByUrl('').then(_ => this.router.navigateByUrl('/commentary'));
  }

  reset() {
    this.comment.comment = "";
    this.comment.over = 0;
    this.comment.ball = 1;
    this.runsThisBall = 0;
    this.match.score = {
      overs: 0,
      balls: 0,
      runs: 0,
      wickets: 0
    };
  }
}
