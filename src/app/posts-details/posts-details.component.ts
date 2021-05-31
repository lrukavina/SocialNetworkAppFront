import { Component, OnInit } from '@angular/core';
import {PostService} from "../service/post.service";
import {ActivatedRoute} from "@angular/router";
import {Post} from "../service/post";

@Component({
  selector: 'app-posts-details',
  templateUrl: './posts-details.component.html',
  styleUrls: ['./posts-details.component.css']
})
export class PostsDetailsComponent implements OnInit {

  post: Post ={
    id: 0,
    title: '',
    imageUrl: '',
    text: '',
    rating: 0,
    author: ''
  };

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) { }

  ngOnInit(): void {
    this.getPostById(this.route.snapshot.params.id);
  }

  getPostById(id: string): any{
    this.postService.getById(id).subscribe(
      data =>{
        this.post = data;
      }
    );
    console.log(`fetched post details`);
  }

  upvote(post: Post): void{
    this.postService.upvote(post);
  }

  downvote(post: Post): void{
    this.postService.downvote(post);
  }

}
