import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/distinct'

@Injectable()
export class SpotifyService {
  private searchUrl:string;
  private baseUrl: string;
  private albumsUrl: string;
  private albumUrl: string;

  constructor(private http:Http) {
    this.baseUrl = 'https://api.spotify.com/v1/'
  }

  searchArtists(searchStr:string, type = 'artist'){
    this.searchUrl =  this.baseUrl + 'search?query=' + searchStr + '&offset=0&limit=20&type=' + type + '&market=us';

    return this.http.get(this.searchUrl)
      .map((res:Response) => res.json())
  }

  getArtist(id){
    var artistUrl = this.baseUrl + 'artists/' + id;

    return this.http.get(artistUrl)
      .map(res => res.json())
  }

  getAlbums(artistId:string){
    this.albumsUrl = this.baseUrl + 'artists/' + artistId + '/albums';

    return this.http.get(this.albumsUrl)
      .map(res => res.json())
      .do(albums => console.log(albums.items))
      .map(albums => albums.items)
      .distinct(album => album.name)
      .do(album => console.log(album.name))


  }

  getAlbum(albumId:string){
    this.albumUrl = this.baseUrl + 'albums/' + albumId;

    return this.http.get(this.albumUrl)
      .map(res => res.json())
  }
}
