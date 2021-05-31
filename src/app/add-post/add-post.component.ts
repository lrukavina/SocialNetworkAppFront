import { Component, OnInit } from '@angular/core';
import {PostService} from "../service/post.service";
import {Post} from "../service/post";
import {PostsComponent} from "../posts/posts.component";

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  constructor(
    private postService: PostService,
  ) { }

  ngOnInit(): void {
  }

   addNewPost(title: string, imageUrl: string, text: string, rating: number, author: string): void{
    title = title.trim();
    text = text.trim();
    author = author.trim();

    if(!title || !text){return;}

    if(!author){
      author = 'anonymous';
    }
    this.postService.addNewPost({title, imageUrl, text, rating, author} as Post)
      .subscribe(data => data);
  }
}
