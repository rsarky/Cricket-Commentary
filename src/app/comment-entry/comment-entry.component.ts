import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Comment } from '../Comment';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Match } from '../Match';
import { MatchInfoService } from '../match-info.service'
//TODO: refactor db stuff into match-info service.
@Component({
  selector: 'app-comment-entry',
  templateUrl: './comment-entry.component.html',
  styleUrls: ['./comment-entry.component.scss']
})
export class CommentEntryComponent implements OnInit {
  @Input() match: Match;
  @Input() matchKey;
  database: MatchInfoService;
  comment = new Comment();
  battingTeam: string;
  bowlingTeam: string;
  comments;
  ref;
  constructor(db: MatchInfoService) {
    this.database = db;
  }

  ngOnInit() {
    
  }

  onSubmit() {
    this.database.pushComment(this.matchKey, this.comment, this.match.inning)
      .then(() => {
        this.comment = new Comment();
      })
      .catch((err) => {
        console.log(err);
      })
  }

  nextInning() {
    this.match.inning = 2;
    //Update db here.
  }

  endMatch() {
    this.match.status = 'completed';
    //Update db here.
  }
}
