import {Component, OnInit} from '@angular/core';
import {SpotifyService} from "../spotify/spotify.service";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {Album} from "../spotify/album.model";

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  private id: string;
  private album:Album;
  private subscription: Subscription;

  constructor(private spotifyService: SpotifyService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      params => {
        let id = params['id']

        this.spotifyService.getAlbum(id)
          .do(album => console.log(album))
          .subscribe(album => this.album = album)
      }
    )
  }

}
