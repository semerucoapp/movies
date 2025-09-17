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
  },

//   { path: "teachers", component: TeachersComponent},

//   { path: "login", component: LoginComponent},
   // { path: '', redirectTo: '/', pathMatch: 'full' }

 
  /* 
    { path: '', redirectTo: '/search', pathMatch: 'full' }

  { path: "notfound", component: NotfoundComponent },
   { path: "**", redirectTo: "notfound" },*/
];
