import {Component, OnInit} from '@angular/core';
import {Artist} from "../spotify/artist.model";
import {Album} from "../spotify/album.model";
import {SpotifyService} from "../spotify/spotify.service";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-artist',
  templateUrl: 'artist.component.html',
  styleUrls: ['artist.component.css']
})
export class ArtistComponent implements OnInit {
  id: number;
  artist: Artist;
  albums: Album[];

  private subscription: Subscription;

  constructor(private spotifyService: SpotifyService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      params => {
        let id = params['id']

        this.spotifyService.getArtist(id)
          .subscribe(artist => {
            this.artist = artist;
          });

        this.spotifyService.getAlbums(id)
          .subscribe(albums => {
            console.table(albums);
            this.albums = albums;
          })
      }
    )
  }

}
