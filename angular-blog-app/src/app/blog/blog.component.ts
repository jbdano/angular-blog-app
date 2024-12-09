import { AfterViewInit, Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

export interface BlogPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-blog',
  imports: [CommonModule, HttpClientModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})

export class BlogComponent implements AfterViewInit {

  ApiUrl = 'https://jsonplaceholder.typicode.com/posts';
  posts: BlogPost[] = [];

  constructor(private http: HttpClient) {}

  ngAfterViewInit() {
    // this.blogComponent.getPosts();
    this.http.get(this.ApiUrl).subscribe((data) => {
      this.posts = data as BlogPost[];
    });
  }

}
