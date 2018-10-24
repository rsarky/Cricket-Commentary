import { Component, OnInit } from '@angular/core';
import { Match } from '../models/Match';
import { MatchInfoService } from '../services/match-info.service';
import { TEAMS } from '../Teams';

@Component({
  selector: 'app-newmatch',
  templateUrl: './newmatch.component.html',
  styleUrls: ['./newmatch.component.scss']
})
export class NewmatchComponent implements OnInit {
  match: Match = new Match();
  db: MatchInfoService;
  success: boolean;
  showMatchForm: boolean;
  showError: boolean;
  teams = TEAMS;
  constructor(db: MatchInfoService) {
    this.showMatchForm = true;
    this.db = db;
  }

  ngOnInit() {
  }

  onSubmit() {
    this.match.batting = this.match.toss;
    this.db.putMatch(this.match)
    .then((key: string) => {
      this.success = true;
      this.match.dbKey = key;
      // TODO very very hacky. Find an alternate method to get the key for a firebase list item. This uses 2 db acceses.
      this.db.setKey(key);
      console.log(this.match.dbKey);
      this.showMatchForm = false;
      console.log('successfully created match');
    })
    .catch(_ => {
      this.success = false;
      this.showError = true;
      console.log('Something went wrong.')
    })
  }

}
