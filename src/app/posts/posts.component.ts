import { Component, OnInit } from '@angular/core';
import {Post} from "../service/post";
import {ActivatedRoute} from "@angular/router";
import {PostService} from "../service/post.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[] | undefined;

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

}
