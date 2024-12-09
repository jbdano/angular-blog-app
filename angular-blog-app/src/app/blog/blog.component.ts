import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog',
  imports: [CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {

  ApiUrl = 'https://jsonplaceholder.typicode.com/posts';
  posts: any[] = [];

  constructor(private http: HttpClient) {}

  getPosts() {
    this.http.get(this.ApiUrl).subscribe((data) => {
      console.log(data);
      this.posts = data as any[];
    });
  }

}
