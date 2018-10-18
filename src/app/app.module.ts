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
import { CommentLandingComponent } from './comment-landing/comment-landing.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { CommentsOutputComponent } from './comments-output/comments-output.component';


@NgModule({
  declarations: [
    AppComponent,
    CommentEntryComponent,
    UserComponent,
    CommentatorLoginComponent,
    NewmatchComponent,
    CommentLandingComponent,
    CommentsOutputComponent
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
    RouterModule.forRoot([{ path: 'commentary', component: CommentatorLoginComponent },
    { path: '', component: UserComponent }]),
    MatListModule,
    AngularFireAuthModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatCardModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
