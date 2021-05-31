import { Component, OnInit } from '@angular/core';
import {Comment} from "../service/comment";
import {ActivatedRoute} from "@angular/router";
import {CommentService} from "../service/comment-service";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments: Comment[] = [];

  constructor(
    private route: ActivatedRoute,
    private commentService: CommentService
  ) { }

  ngOnInit(): void {
    this.getCommentsByPostId(this.route.snapshot.params.id);
  }

  getCommentsByPostId(id: string): any{
    this.commentService.getByPostId(id).subscribe(
      data => {
        this.comments = data;
      }
    );
    console.log('fetched comments');
  }

}
