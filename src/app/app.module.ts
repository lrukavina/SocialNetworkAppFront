import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { HttpClientModule} from '@angular/common/http';
import { PostsDetailsComponent } from './posts-details/posts-details.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostsDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
