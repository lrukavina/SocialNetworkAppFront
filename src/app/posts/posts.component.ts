import { Component, OnInit } from '@angular/core';
import {Post} from "../service/post";
import {PostService} from "../service/post.service";
import { CommonModule } from "@angular/common";
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {


  posts: Post[];

  constructor(
    private postsService: PostService
  ) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(): void{
    this.postsService.getPosts()
      .subscribe(posts => this.posts = posts);
  }

  upvote(post: Post): void{
    this.postsService.upvote(post);
  }

  //TODO: check image upload: https://www.remotestack.io/angular-image-upload-and-preview-tutorial-example/
}
