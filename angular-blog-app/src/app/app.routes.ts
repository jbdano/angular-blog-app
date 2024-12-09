import { Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { PostComponent } from './blog/post/post.component';
import { TictactoeComponent } from './tictactoe/tictactoe.component';

export const routes: Routes = [
    { path: '', redirectTo: 'blog', pathMatch: 'full' },
    { path: 'blog', component: BlogComponent },
    { path: 'blog/:id', component: PostComponent },
    { path: 'tictactoe', component: TictactoeComponent },
];
