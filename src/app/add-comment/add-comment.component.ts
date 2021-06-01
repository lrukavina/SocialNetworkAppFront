import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CommentService} from "../service/comment-service";
import {Comment} from "../service/comment";
import {CommentsComponent} from "../comments/comments.component";

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {

  id:number;


  constructor(
    private route: ActivatedRoute,
    private commentService: CommentService,
    private commentsComponent: CommentsComponent
  ) { }

  ngOnInit(): void {
  }

  addNewComment(author: string, content: string, postId: number): void{
    author = author.trim();
    content = content.trim();

    if(!content){return;}

    if(!author){
      author = 'anonymous';
    }
    postId = this.route.snapshot.params.id;

    // @ts-ignore
    this.commentService.addNewComment({author, content, postId} as Comment)
      .subscribe(
        comment => {
          // @ts-ignore
          return this.commentsComponent.comments.push(comment);
        }
      )
  }
}
