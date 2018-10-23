import { Component, OnInit } from '@angular/core';
import { Comment } from '../Comment';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { MatchInfoService } from '../match-info.service';
import { Match } from '../Match';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  commentaryMatch: Match;
  showTarget: boolean;
  target: {
    target: number;
    runsReq: number;
    oversRem: number;
    ballsRem: number;
  }
  comments: Observable<any[]>; //Add type safety somehow.
  matches: Observable<any[]>;
  nomatches: boolean;
  constructor(public matchInfo: MatchInfoService) {
    this.target = {
      target: 0,
      runsReq: 0,
      oversRem: 0,
      ballsRem: 0
    }
    this.showTarget = false;
    this.nomatches = false;
    this.matches = matchInfo.getMatches();
    this.matches.subscribe(s => {
      if (s.length == 0) {
        this.nomatches = true;
      }
      s.forEach(ele => {
        if (ele.status == 'running')
          this.commentaryMatch = ele;
      })
    })
  }

  ngOnInit() {
  }

  showMatch(match: Match) {
    this.showTarget = false;
    let asyncMatch = this.matchInfo.getMatch(match.dbKey)
    asyncMatch.subscribe(s => {
      if (s.inning == 2) {
        this.showTarget = true;
        this.target.target = s.innings1.runs + 1;
        this.target.runsReq = this.target.target - s.score.runs;
        this.target.oversRem = s.score.balls == 0 ? s.overs - s.score.overs : s.overs - s.score.overs - 1;
        this.target.ballsRem = s.score.balls == 0 ? 0 : 6 - s.score.balls;
      }
    })
    this.commentaryMatch = match;
  }
}
