import { Routes } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { MovieComponent } from './screens/movie/movie.component';
import { RegisterComponent } from './screens/register/register.component';

export const routes: Routes = [
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "",
    component: RegisterComponent,
  },
  {
    path: 'movie/:id',
    component: MovieComponent
  }
];
