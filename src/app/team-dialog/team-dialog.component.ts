import { Component, OnInit } from '@angular/core';
import { TEAMS } from '../Teams';

@Component({
  selector: 'app-team-dialog',
  templateUrl: './team-dialog.component.html',
  styleUrls: ['./team-dialog.component.scss']
})
export class TeamDialogComponent implements OnInit {
  teams = TEAMS;
  constructor() { }

  ngOnInit() {
  }

}
