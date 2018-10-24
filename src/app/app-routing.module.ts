import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router }  from '@angular/router';
import { CommonModule } from '@angular/common';

import {CommentatorLoginComponent} from './commentator-login/commentator-login.component'
import {UserComponent} from './user/user.component'
import {CommentLandingComponent} from './comment-landing/comment-landing.component'
import {CommentEntryComponent} from './comment-entry/comment-entry.component'

const appRoutes = [
  { path: 'commentary', component: CommentatorLoginComponent },
  { path: '', component: UserComponent },
  { path: 'commentary/home', component: CommentLandingComponent},
  { path: 'commentary/commentate', component: CommentEntryComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true
      }
    )
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
