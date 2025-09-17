import { injectInfiniteQuery, injectQuery } from '@tanstack/angular-query-experimental';
import { inject } from '@angular/core';
import { Movies } from '../../core/movies/services/now-playing.service';
import { lastValueFrom } from 'rxjs';

export const useMovies = () => {
    const movies = inject(Movies);

    const nowPlayingQuery = injectQuery(() => ({
        queryKey: ['movies', 'nowPlaying'],
        queryFn: () => movies.nowPlayingAction(),
        staleTime: 1000 * 60 * 60 * 24,
    }));

    const popularQuery = injectQuery(() => ({
        queryKey: ['movies', 'popular'],
        queryFn: () => movies.popularAction(),
        staleTime: 1000 * 60 * 60 * 24,
    }));


    // const topRatedQuery = injectInfiniteQuery(() => ({
    // queryKey: ['movies', 'top-rated'],
    // queryFn: ({ pageParam }: { pageParam: number }) => movies.topRatedAction(pageParam),
    // initialPageParam: 1,
    // getNextPageParam: (lastPage, pages) => pages.length + 1,
    // maxPages: 5,
    // }));

    const topRatedQuery = injectInfiniteQuery(() => ({
    queryKey: ['movies', 'top-rated'],
    queryFn: async ({ pageParam = 1 }) => { // Cambiado a 1
        return lastValueFrom(movies.topRatedAction(pageParam));
    },
    initialPageParam: 1, // Cambiado a 1 para coincidir con la API
    getNextPageParam: (lastPage) => {
        // Verifica si hay más páginas disponibles
        if (lastPage.page < lastPage.total_pages) {
        return lastPage.page + 1;
        }
        return undefined; // No hay más páginas
    },
    }));

    const upcomingQuery = injectQuery(() => ({
        queryKey: ['movies', 'upcoming'],
        queryFn: () => movies.upcomingAction(),
        staleTime: 1000 * 60 * 60 * 24,
    }));

    
    return {
        nowPlayingQuery,
        popularQuery,
        topRatedQuery,
        upcomingQuery,
    };
};
