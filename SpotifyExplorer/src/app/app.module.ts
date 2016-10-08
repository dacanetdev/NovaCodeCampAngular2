import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import {SpotifyExplorerRoutingModule} from "./app-routing.module";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {SpotifyModule} from "./spotify/spotify.module";
import {SpotifyService} from "./spotify/spotify.service";
import {ArtistComponent} from "./artist/artist.component";
import { InputDebounceComponent } from './shared/input-debounce/input-debounce.component';
import { AlbumComponent } from './album/album.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtistComponent,
    SearchComponent,
    SearchComponent,
    NavbarComponent,
    AboutComponent,
    PageNotFoundComponent,
    InputDebounceComponent,
    AlbumComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SpotifyExplorerRoutingModule,
    SpotifyModule
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
