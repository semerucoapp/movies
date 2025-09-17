import { Routes } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { MovieComponent } from './screens/movie/movie.component';

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: 'movie/:id',
    component: MovieComponent
  }
];
