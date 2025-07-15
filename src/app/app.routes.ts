import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MoviesComponent } from './movies/movies.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'movies', component: MoviesComponent },
];
