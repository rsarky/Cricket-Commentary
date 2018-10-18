import { Component, OnInit } from '@angular/core';
import { Comment } from '../Comment';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import { MatchInfoService } from '../match-info.service';
import { Match } from '../Match';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  commentaryMatch: Match;
  comments: Observable<any[]>; //Add type safety somehow.
  matches: Observable<any[]>;
  nomatches:boolean;
  constructor(matchInfo: MatchInfoService) {
    this.nomatches = false;
    this.matches = matchInfo.getMatches();
    this.matches.subscribe(s => {
      if(s.length == 0) {
        this.nomatches = true;
      }
      s.forEach(ele => {
        if(ele.status=='running')
          this.commentaryMatch = ele;
      })
    })
  }

  ngOnInit() {
  }

  showMatch(match: Match) {
    this.commentaryMatch = match;
  }

}
