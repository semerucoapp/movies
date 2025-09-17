import { Component, inject } from '@angular/core';
import { useMovie } from '../../presentation/hooks/useMovie';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie',
  imports: [CommonModule],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.scss'
})
export class MovieComponent {

  private route = inject(ActivatedRoute);
  private id = Number(this.route.snapshot.paramMap.get('id'));

  readonly movieQuery = useMovie(this.id).movieQuery;
  readonly castQuery = useMovie(this.id).castQuery;

  
  currency(value: number | 0, locale: string = 'es-CO', currency: string = 'USD'): string {
    
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency,
      maximumFractionDigits: 0,
    }).format(value);
  }
}
