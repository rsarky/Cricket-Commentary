import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

import { CommentatorLoginComponent } from './commentator-login/commentator-login.component'
import { UserComponent } from './user/user.component'
import { CommentEntryComponent } from './comment-entry/comment-entry.component'
import { AuthGuard } from './services/auth.guard';
import { CommentatorDashboardComponent } from './commentator-dashboard/commentator-dashboard.component';
import { Match } from './models/Match';

const appRoutes = [
  { path: '', component: UserComponent },
  { path: 'commentary', component: CommentatorLoginComponent },
  { path: 'commentary/dashboard', component: CommentatorDashboardComponent, canActivate: [AuthGuard] },
  { path: 'commentary/commentate', component: CommentEntryComponent, canActivate: [AuthGuard], data: {
    match: Match
  }}
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
