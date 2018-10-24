import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

import { CommentatorLoginComponent } from './commentator-login/commentator-login.component'
import { UserComponent } from './user/user.component'
import { RunningMatchesComponent } from './running-matches/running-matches.component'
import { CommentEntryComponent } from './comment-entry/comment-entry.component'
import { AuthGuard } from './services/auth.guard';

const appRoutes = [
  { path: '', component: UserComponent },
  { path: 'commentary', component: CommentatorLoginComponent },
  { path: 'commentary/dashboard', component: RunningMatchesComponent, canActivate: [AuthGuard] },
  { path: 'commentary/commentate', component: CommentEntryComponent, canActivate: [AuthGuard]}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      // {
      //   enableTracing: true
      // }
    )
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
