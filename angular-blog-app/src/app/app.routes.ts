import { Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';

export const routes: Routes = [
    { path: '', redirectTo: '/blog', pathMatch: 'full' },
    { path: 'blog', component: BlogComponent }
];
