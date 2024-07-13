import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { ArtistResponse } from '../interfaces/artistResponse';
import { TrackResponse } from '../interfaces/trackResponse';
import { AlbumResponse } from '../interfaces/albumResponse';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  private artistsUrl: string = 'https://api.stats.fm/api/v1/users/evl575/top/artists';
  private tracksUrl: string = 'https://api.stats.fm/api/v1/users/evl575/top/tracks';
  private albumsUrl: string = 'https://api.stats.fm/api/v1/users/evl575/top/albums';

  constructor(private httpClient: HttpClient) { }


  getTopArtists(): Observable<ArtistResponse>{

    return this.httpClient.get<ArtistResponse>(this.artistsUrl)
    .pipe(
      map((response: ArtistResponse) => {
        return response;
      }),
      catchError(this.handleError)
    );

  }

  getTopTracks(): Observable<TrackResponse>{
    return this.httpClient.get<TrackResponse>(this.tracksUrl)
    .pipe(
      map((response: TrackResponse) => {
        return response;
      }),
      catchError(this.handleError)
    );
  }

  getTopAlbums(): Observable<AlbumResponse>{
    return this.httpClient.get<AlbumResponse>(this.albumsUrl)
    .pipe(
      map((response: AlbumResponse) => {
        return response;
      }),
      catchError(this.handleError)
    );
  }


  private handleError(error: HttpErrorResponse): Observable<never>{
      return throwError(error.message);
  }

  
}
