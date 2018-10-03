import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule, MatCheckboxModule, MatAccordion} from '@angular/material';
import { CommentEntryComponent } from './comment-entry/comment-entry.component';
import { FormsModule } from '@angular/forms';
import {MatSelectModule, MatSelect} from '@angular/material/select';
import {AngularFireModule} from '@angular/fire'
import {environment} from '../environments/environment'
import {AngularFireDatabaseModule} from '@angular/fire/database'
import { RouterModule, Routes } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    CommentEntryComponent
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
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
