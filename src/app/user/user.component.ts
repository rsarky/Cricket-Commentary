import { Component, OnInit } from '@angular/core';
import { Comment } from '../Comment';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import { MatchInfoService } from '../match-info.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  comments: Observable<any[]>; //Add type safety somehow.
  matches: Observable<any[]>
  constructor(matchInfo: MatchInfoService) {
    this.matches = matchInfo.getMatches();
  }

  ngOnInit() {
  }

}
