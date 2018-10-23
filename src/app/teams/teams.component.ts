import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {TeamDialogComponent} from '../team-dialog/team-dialog.component'

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  showTeams(): void {
    const dialogRef = this.dialog.open(TeamDialogComponent, {
      width: '70%'
    });
  }

}
