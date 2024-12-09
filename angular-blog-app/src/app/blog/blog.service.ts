import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BlogPost } from './post/post.component';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private apiUrl = 'https://dummyjson.com/posts';

  constructor(private http: HttpClient) {}

  public getPosts(): Observable<{ posts: BlogPost[] }> {
    return this.http.get<{ posts: BlogPost[] }>(this.apiUrl);
  }

  public getPostById(id: number): Observable<BlogPost> {
    return this.http.get<BlogPost>(`${this.apiUrl}/${id}`);
  }
}