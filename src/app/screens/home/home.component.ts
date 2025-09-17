import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { useMovies } from '../../presentation/hooks/useMovies';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { Menubar } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { MovieHorizontalListComponent } from '../../presentation/components/movies/movie-horizontal-list/movie-horizontal-list.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [CommonModule,CarouselModule, ButtonModule, TagModule,Menubar, MovieHorizontalListComponent],
})
export class HomeComponent {  
  items: MenuItem[] | undefined;

  responsiveOptions: any[] | undefined;
  readonly nowPlayingQuery = useMovies().nowPlayingQuery;
  readonly topRatedQuery = useMovies().topRatedQuery;

  constructor(private router : Router){}

  get topRatedMovies(): any[] {
    const pages = this.topRatedQuery.data()?.pages ?? [];
    // console.log("Páginas recibidas:", pages);
    // Aplanar todas las películas de todas las páginas
    const allMovies = pages.flatMap(page => page.results || []);
    // console.log("Películas aplanadas:", allMovies.length);
    
    return allMovies;
  }

  loadNextPage = () => {
    this.topRatedQuery.fetchNextPage();
  };

  goMovie(id:number){
    this.router.navigate(['movie/'+id])
  }

   ngOnInit() {
        this.items = [
            {
                label: 'Home',
                icon: 'pi pi-home'
            },
            {
                label: 'Series',
                icon: 'pi pi-star'
            },
            {
                label: 'Estrenos cine',
                icon: 'pi pi-star'
            },
            {
                label: 'Generos',
                icon: 'pi pi-search',
                items: [
                    {
                        label: 'Genero 1',
                        icon: 'pi pi-bolt'
                    },
                    {
                        label: 'Genero 2',
                        icon: 'pi pi-server'
                    },
                    {
                        label: 'Genero 3',
                        icon: 'pi pi-pencil'
                    }
                ]
            },
            {
                label: 'Contact',
                icon: 'pi pi-envelope'
            }
        ]
    }
}
