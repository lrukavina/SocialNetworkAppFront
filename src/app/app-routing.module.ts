import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from "@angular/router";
import {PostsComponent} from "./posts/posts.component";
import {AddPostComponent} from "./add-post/add-post.component";
import {PostsDetailsComponent} from "./posts-details/posts-details.component";

export const routes: Routes = [
  {path: 'posts', component: PostsComponent},
  {path: 'new/post', component: AddPostComponent},
  {path: 'comments/:id', component: PostsDetailsComponent}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
