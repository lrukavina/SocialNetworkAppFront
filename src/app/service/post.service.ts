import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Post} from "./post";
import {catchError, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private postsUrl = 'http://localhost:8080/posts';

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

  getPosts(): Observable<Post[]>{
    return this.http.get<Post[]>(this.postsUrl)
      .pipe(
        tap(_ => console.log('fethced posts')),
        catchError(this.handleError<Post[]>('getPosts', []))
      );
  }

  getById(id: string): Observable<any>{
    const url = `${this.postsUrl}/${id}`;
    return this.http.get(url);
  }

  upvote(post: Post){
    const url = `${this.postsUrl}/${post.id}`;
    post.rating += 1;
    return this.http.put(url, post).subscribe(data => {
      console.log(data)
    });
  }

}
