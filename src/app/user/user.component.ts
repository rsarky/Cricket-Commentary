import { Component, OnInit } from '@angular/core';
import { Comment } from '../Comment'
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList} from '@angular/fire/database'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  comments: Observable<any[]>; //Add type safety somehow.
  constructor(db : AngularFireDatabase) {
    this.comments = db.list('comments', ref => ref.orderByChild('over'))
    .valueChanges();
  }

  ngOnInit() {
  }

}
