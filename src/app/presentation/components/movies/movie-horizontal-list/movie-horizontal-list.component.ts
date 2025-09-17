import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-movie-horizontal-list',
  imports: [CommonModule],
  templateUrl: './movie-horizontal-list.component.html',
  styleUrl: './movie-horizontal-list.component.scss'
})
export class MovieHorizontalListComponent {
  @Input() title?: string;
  @Input() movies: any[] = [];
  @Input() loadNextPage?: () => void;
  @Input() hasNextPage?: boolean; // Agrega esta propiedad
  @Input() isFetchingNextPage?: boolean; // Y esta
  @Output() movieClick = new EventEmitter<number>(); // 👈 nuevo Output

  private isLoading = false;

  onMovieClick(id: number) {
    this.movieClick.emit(id);
  }

  onScroll(event: Event) {
    const el = event.target as HTMLElement;
    const reachedEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 200;

    if (reachedEnd && !this.isLoading && this.hasNextPage && !this.isFetchingNextPage) {
      this.isLoading = true;
      this.loadNextPage?.();
      setTimeout(() => (this.isLoading = false), 300);
    }
  }
}