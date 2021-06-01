import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Post} from "./post";
import {catchError, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private commentsUrl = 'http://localhost:8080/comments';

  httpOptions = {
    headers: new HttpHeaders(
      {'content-type': 'application/json'})
  };

  constructor(
    private http: HttpClient
  ) { }

  private handleError<T>(operation = 'operation', result?: T){
    return(error: any): Observable<T> => {
      console.error(operation);
      console.error(error);
      return of(result as T);
    };
  }

  getByPostId(id: string): Observable<any>{
    const url = `${this.commentsUrl}/${id}`;
    return this.http.get(url);
  }

  addNewComment(comment: Comment): Observable<Comment>{
    return this.http.post<Comment>(this.commentsUrl, comment, this.httpOptions).pipe(
      tap((newComment: Comment) => console.log(`Added new comment by: ${newComment}`)),
      catchError(this.handleError<Comment>('addComment'))
    );
  }
}
