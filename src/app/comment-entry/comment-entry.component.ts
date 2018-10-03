import { Component, OnInit, ViewChild } from '@angular/core';
import { Comment } from '../Comment'
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-comment-entry',
  templateUrl: './comment-entry.component.html',
  styleUrls: ['./comment-entry.component.scss']
})
export class CommentEntryComponent implements OnInit {
  comment = new Comment();
  battingTeam: string;
  bowlingTeam: string;
  comments;
  constructor(db: AngularFireDatabase) { 
    this.comments = db.list('comments')
  }

  ngOnInit() {
  }

  onSubmit() {

    this.comments.push(this.comment)
    .then(_ => {
      console.log('success');
      this.comment = new Comment();
    })
    .catch(err => console.log(err))
  }
  get diagnostic () {
    return JSON.stringify(this.comment);
  }

}
