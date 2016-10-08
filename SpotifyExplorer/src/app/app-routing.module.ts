import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchComponent} from "./search/search.component";
import {AboutComponent} from "./about/about.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {ArtistComponent} from "./artist/artist.component";
import {AlbumComponent} from "./album/album.component";

const routes: Routes = [
  {path:'search', component: SearchComponent},
  {path:'artist/:id', component: ArtistComponent},
  {path:'album/:id', component: AlbumComponent},
  {path:'about', component: AboutComponent},
  { path:'', component: SearchComponent },
  {path:'**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class SpotifyExplorerRoutingModule { }
