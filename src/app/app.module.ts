import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule, MatCheckboxModule, MatAccordion } from '@angular/material';
import { CommentEntryComponent } from './comment-entry/comment-entry.component';
import { FormsModule } from '@angular/forms';
import { MatSelectModule, MatSelect } from '@angular/material/select';
import { AngularFireModule } from '@angular/fire'
import { environment } from '../environments/environment'
import { AngularFireDatabaseModule } from '@angular/fire/database'
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { MatListModule } from '@angular/material/list';
import { CommentatorLoginComponent } from './commentator-login/commentator-login.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { NewmatchComponent } from './newmatch/newmatch.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommentsOutputComponent } from './comments-output/comments-output.component';
import { TeamsComponent } from './teams/teams.component';
import { MatDialogModule } from '@angular/material/dialog';
import { TeamDialogComponent } from './team-dialog/team-dialog.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { WinnerDialogComponent } from './winner-dialog/winner-dialog.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { AppRoutingModule } from './app-routing.module';

import { MatchInfoService } from './services/match-info.service'
import { AuthService } from './services/auth.service'
import { AuthGuard } from './services/auth.guard';
import { RunningMatchesComponent } from './running-matches/running-matches.component';
import { CommentatorDashboardComponent } from './commentator-dashboard/commentator-dashboard.component';
import { MatchDataService } from './services/match-data.service';


@NgModule({
  declarations: [
    AppComponent,
    CommentEntryComponent,
    UserComponent,
    CommentatorLoginComponent,
    NewmatchComponent,
    CommentsOutputComponent,
    TeamsComponent,
    TeamDialogComponent,
    WinnerDialogComponent,
    RunningMatchesComponent,
    CommentatorDashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSelectModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    MatListModule,
    AngularFireAuthModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatExpansionModule,
    MatAutocompleteModule,
    AppRoutingModule
  ],
  entryComponents: [
    TeamDialogComponent,
    WinnerDialogComponent
  ],
  providers: [
    MatchInfoService,
    AuthService,
    AuthGuard,
    MatchDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
