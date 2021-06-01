import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { HttpClientModule} from '@angular/common/http';
import { PostsDetailsComponent } from './posts-details/posts-details.component';
import {CommonModule} from '@angular/common';
import { AppRoutingModule, routes } from './app-routing.module';
import { AddPostComponent } from './add-post/add-post.component';
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import { CommentsComponent } from './comments/comments.component';
import { AddCommentComponent } from './add-comment/add-comment.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostsDetailsComponent,
    AddPostComponent,
    CommentsComponent,
    AddCommentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  exports: [
    RouterModule
  ],
  providers: [PostsComponent, CommentsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
