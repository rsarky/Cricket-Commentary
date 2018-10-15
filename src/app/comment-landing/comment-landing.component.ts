import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators'
import { Match } from '../Match'

@Component({
  selector: 'app-comment-landing',
  templateUrl: './comment-landing.component.html',
  styleUrls: ['./comment-landing.component.scss']
})
export class CommentLandingComponent implements OnInit {
  matches: Observable<any>;
  showCommentEntry: boolean;
  ongoingMatches: Observable<any>;
  selectedMatch: Match;
  constructor(db: AngularFireDatabase) {
    this.matches = db.list('/matches').valueChanges()
    this.ongoingMatches = this.matches.pipe(
      map(matchArray => matchArray = matchArray.filter(match => match.status === 'running'))
    )
  }

  onClick(match) {
    this.showCommentEntry = true;
    this.selectedMatch = match;
  }
  ngOnInit() {
    this.showCommentEntry = false;
  }
}
