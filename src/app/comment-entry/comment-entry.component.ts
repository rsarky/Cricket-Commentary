import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Comment } from '../models/Comment';
import { Observable } from 'rxjs';
import { Match } from '../models/Match';
import { MatchInfoService } from '../services/match-info.service'
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material';
import { TeamDialogComponent } from '../team-dialog/team-dialog.component';
import { WinnerDialogComponent } from '../winner-dialog/winner-dialog.component';
import { MatchDataService } from '../services/match-data.service';

@Component({
  selector: 'app-comment-entry',
  templateUrl: './comment-entry.component.html',
  styleUrls: ['./comment-entry.component.scss']
})
export class CommentEntryComponent implements OnInit {
  match: Match;
  database: MatchInfoService;
  comment: Comment;
  battingTeam: string;
  bowlingTeam: string;
  comments;
  ref;
  runsThisBall: number;
  extra: boolean;
  constructor(db: MatchInfoService, public router: Router, public dialog: MatDialog, private md: MatchDataService) {
    this.comment = new Comment();
    this.database = db;
    this.extra = false;
  }

  ngOnInit() {
    if(this.md.getMatch() == null) {
      this.router.navigate(['/commentary/dashboard']);
    }
    this.match = this.md.getMatch();
    this.runsThisBall = 0;
    this.comment.over = this.match.score.overs;
    this.comment.ball = this.match.score.balls === 0 ? 1 : this.match.score.balls + 1;
  }

  async onSubmit() {
    await this.database.pushComment(this.match.dbKey, this.comment, this.match.inning)
      .then(() => {
        this.comment.comment = "";
        if (!this.extra) {
          this.match.score.overs = this.comment.ball === 6 ? this.comment.over + 1 : this.comment.over;
          this.match.score.balls = this.comment.ball === 6 ? 0 : this.comment.ball;
          if (this.comment.ball === 6) {
            this.comment.over++;
            this.comment.ball = 1;
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
    this.match.score.runs += this.runsThisBall;
    this.runsThisBall = 0;
    this.database.updateScore(this.match.dbKey, this.match.score)
  }

  nextInning() {
    this.match.inning = 2;
    let battingTeam = this.match.batting == this.match.team1 ? this.match.team2 : this.match.team1;
    this.database.changeInning(this.match.dbKey, battingTeam, this.match.score)
    this.reset();
  }

  endMatch() {
    const dialogRef = this.dialog.open(WinnerDialogComponent, {
      width: '50%',
      data: {
        team1: this.match.team1,
        team2: this.match.team2
      }
    });
    dialogRef.afterClosed().subscribe(s => {
      this.match.winner = s;
      this.match.status = 'completed';
      this.database.completeMatch(this.match.dbKey, this.match.score, this.match.winner);
      this.router.navigateByUrl('').then(_ => this.router.navigateByUrl('/commentary/dashboard'));
    })
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
