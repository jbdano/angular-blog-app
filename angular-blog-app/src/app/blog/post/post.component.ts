
import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, RouterOutlet, RouterModule } from '@angular/router';
import { BlogService } from '../blog.service';

export interface BlogPost {
  body: string;
  id: number;
  reactions: { likes: number, dislikes: number };
  tags: string[];
  title: string;
  userId: number;
  views: number;
}

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [HttpClientModule, RouterOutlet, RouterModule],
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  postId!: number;
  post!: BlogPost;

  constructor(private route: ActivatedRoute, private blogService: BlogService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.postId = +params.get('id')!;
      this.blogService.getPostById(this.postId).subscribe((post) => {
        this.post = post;
      });
    });
  }
}