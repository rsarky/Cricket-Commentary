import { Component, OnInit } from '@angular/core';
import { Match } from '../Match'
import { MatchInfoService } from '../match-info.service'

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
  
  constructor(db: MatchInfoService) {
    this.showMatchForm = true;
    this.db = db;
  }

  ngOnInit() {
  }

  onSubmit() {
    this.db.putMatch(this.match)
    .then(_ => {
      this.success = true;
      this.showMatchForm = false;
      console.log('success');
    })
    .catch(_ => {
      this.success = false;
      this.showError = true;
      console.log('Something went wrong.')
    })
  }

}
