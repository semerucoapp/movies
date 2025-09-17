import { HttpClient, HttpParams } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { lastValueFrom, Observable } from "rxjs";
import { environment } from "../../../../environments/environment";
import { Cast, CompleteMovie, MovieDBCreditsResponse, MovieDBMovieResponse, MovieDBMoviesResponse } from "../infrastructure/interfaces/movies";
import { MovieMapper } from "../infrastructure/mappers/movie.mapper";
import { CastMapper } from "../infrastructure/mappers/cast.mapper";

@Injectable({
    providedIn: "root",
})
export class Movies {
    private http = inject(HttpClient)
    
    nowPlayingAction(): Promise<MovieDBMoviesResponse> {
        const url = `${environment.api.url}/now_playing`;
        const params = new HttpParams()
            .set('api_key', environment.api.key)
            .set('language', 'es-MX');

        return lastValueFrom(this.http.get<MovieDBMoviesResponse>(url, { params }));
    }

    popularMoviesAction(): Promise<MovieDBMoviesResponse> {
        const url = `${environment.api.url}/popular`;
        const params = new HttpParams()
            .set('api_key', environment.api.key)
            .set('language', 'es-MX');

        return lastValueFrom(this.http.get<MovieDBMoviesResponse>(url, { params }));
    }

    topRatedAction(page: number = 1): Observable<MovieDBMoviesResponse> {
    const url = `${environment.api.url}/top_rated`;
    const params = new HttpParams()
        .set('api_key', environment.api.key)
        .set('language', 'es-MX')
        .set('page', page.toString());

    return this.http.get<MovieDBMoviesResponse>(url, { params });
    }

    upcomingMoviesAction(): Promise<MovieDBMoviesResponse> {
        const url = `${environment.api.url}/upcoming`;
        const params = new HttpParams()
            .set('api_key', environment.api.key)
            .set('language', 'es-MX');

        return lastValueFrom(this.http.get<MovieDBMoviesResponse>(url, { params }));
    }


    getMovieByIdAction(id: number): Promise<CompleteMovie> {
    const url = `${environment.api.url}/${id}`;
    const params = new HttpParams()
        .set('api_key', environment.api.key)
        .set('language', 'es-MX');

    return lastValueFrom(this.http.get<MovieDBMovieResponse>(url, { params }))
        .then(movie => MovieMapper.fromTheMovieDBToCompleteMovie(movie));
    }


    getMovieCastAction(movieId: number): Promise<Cast[]> {
    const url = `${environment.api.url}/${movieId}/credits`;
    const params = new HttpParams()
        .set('api_key', environment.api.key)
        .set('language', 'es-MX');

    return lastValueFrom(this.http.get<MovieDBCreditsResponse>(url, { params }))
        .then(data => data.cast.map(CastMapper.fromMovieDBCastToEntity));
    }

}