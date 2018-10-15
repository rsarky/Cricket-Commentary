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
  comment: Comment;
  battingTeam: string;
  bowlingTeam: string;
  comments;
  ref;
  constructor(db: MatchInfoService) {
    this.comment = new Comment();
    this.database = db;
  }

  ngOnInit() {
    
    this.comment.over = this.match.score.overs;
    this.comment.ball = this.match.score.balls === 6 ? 1 : this.match.score.balls + 1;
    console.log(this.comment)

  }

  onSubmit() {
    this.database.pushComment(this.matchKey, this.comment, this.match.inning)
      .then(() => {
        this.comment.comment = "";
        if(this.comment.ball === 6) {
          this.comment.over++;
          this.comment.ball = 0;
        } else {
          this.comment.ball++;
        }
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
