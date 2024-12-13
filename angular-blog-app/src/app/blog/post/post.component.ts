
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterOutlet, RouterModule } from '@angular/router';
import { BlogService } from '../blog.service';
import { Post } from './post';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  postId!: number;
  post!: Post;

  constructor(private route: ActivatedRoute, private blogService: BlogService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.postId = +params.get('id')!;
      this.blogService.getPostById(this.postId).subscribe((post) => {
        this.post = post;
        console.log(post);
      });
    });
  }
}