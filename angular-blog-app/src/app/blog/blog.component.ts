import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BlogService } from './blog.service';
import { BlogPost } from './post/post.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterOutlet, RouterModule],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements AfterViewInit {
  posts: BlogPost[] = [];
  order: string = 'desc';

  constructor(private blogService: BlogService) {}

  ngAfterViewInit() {
    this.blogService.getPosts().subscribe((data) => {
      this.posts = data.posts;
      this.sortPosts();
    });
  }

  sortPosts(): void {

    this.posts.sort((a, b) => {
      return a.title.localeCompare(b.title);
    });

    if (this.order === 'asc') {
      this.order = 'desc';
      this.posts = this.posts.reverse();
    }
    else {
      this.order = 'asc';
    }
  }
}