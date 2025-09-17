import { injectInfiniteQuery, injectQuery } from '@tanstack/angular-query-experimental';
import { inject } from '@angular/core';
import { Movies } from '../../core/movies/services/now-playing.service';

export const useMovie = (id: number) => {
  const movies = inject(Movies);

  const movieQuery = injectQuery(() => ({
    queryKey: ['movie', id],
    queryFn: () => movies.getMovieByIdAction(id),
    staleTime: 1000 * 60 * 60 * 24, // 24 horas
  }));

  const castQuery = injectQuery(() => ({
    queryKey: ['movie', id, 'cast'],
    queryFn: () => movies.getMovieCastAction(id),
    staleTime: 1000 * 60 * 60 * 24, // 24 horas
  }));

  return {
    movieQuery,
    castQuery,
  };
};
