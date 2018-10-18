import { Component, OnInit, Input } from '@angular/core';
import { Match } from '../Match';
import { MatchInfoService } from '../match-info.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-comments-output',
  templateUrl: './comments-output.component.html',
  styleUrls: ['./comments-output.component.scss']
})
export class CommentsOutputComponent implements OnInit {
  selectedMatch: Match;
  @Input() set match(m: Match) {
    this.selectedMatch = m;
    this.comments = this.database.getComments(this.selectedMatch);
    this.comments.subscribe(s => console.log(s));
  }
  comments: Observable<any[]>;
  database: MatchInfoService;
  constructor(db: MatchInfoService) {
    this.database = db;
  }

  ngOnInit() {
    
  }

}
