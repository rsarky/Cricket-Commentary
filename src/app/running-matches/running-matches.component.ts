import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators'
import { Match } from '../models/Match'

@Component({
  selector: 'app-running-matches',
  templateUrl: './running-matches.component.html',
  styleUrls: ['./running-matches.component.scss']
})
export class RunningMatchesComponent implements OnInit {

  matches: Observable<any>;
  showCommentEntry: boolean;
  ongoingMatches: Observable<any>;
  selectedMatch: Match;
  noMatches:boolean = false;
  constructor(db: AngularFireDatabase) {
    this.matches = db.list('/matches').valueChanges() //TODO: This should be in the service.
    this.ongoingMatches = this.matches.pipe(
      map(matchArray => matchArray = matchArray.filter(match => match.status === 'running'))
    )
    this.ongoingMatches.subscribe(s => {
      if(s.length === 0) {
        this.noMatches = true;
      }
    })
  }

  onClick(match) {
    this.showCommentEntry = true;
    this.selectedMatch = match;
  }
  ngOnInit() {
    this.showCommentEntry = false;
  }

}
