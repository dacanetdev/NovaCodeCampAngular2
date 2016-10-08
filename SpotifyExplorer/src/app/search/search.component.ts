import { Component, OnInit } from '@angular/core';
import {SpotifyService} from "../spotify/spotify.service";
import {Artist} from "../spotify/artist.model";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  private searchStr: string;
  private searchRes: Artist[]
  constructor(private spotifyService:SpotifyService) { }

  public searchChanged(value:string){
    this.searchStr = value;
    this.searchMusic();
  }

  searchMusic() {
    if(!this.searchStr) {
      this.searchRes = null;
    }
    else{

        this.spotifyService.searchArtists(this.searchStr)
          .subscribe(res => {
            console.table(res.artists.items);
            this.searchRes = res.artists.items as Artist[];
          });
    }
  }
}
