import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpModule} from "@angular/http";
import {SpotifyService} from "./spotify.service";

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [],
  providers:[SpotifyService]
})
export class SpotifyModule { }
