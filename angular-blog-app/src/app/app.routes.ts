import { Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { TictactoeComponent } from './tictactoe/tictactoe.component';

export const routes: Routes = [
    { path: 'blog', component: BlogComponent },
    { path: 'tictactoe', component: TictactoeComponent },
];
