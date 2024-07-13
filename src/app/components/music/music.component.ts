import { Component, OnInit } from '@angular/core';
import { ArtistResponse, Item } from '../../interfaces/artistResponse';
import { MusicService } from '../../services/music.service';
import { HeaderComponent } from "../header/header.component";
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";
import { MinutesToHoursPipe } from '../../pipes/minutesToHours.pipe';
import { TrackResponse, TrackItem } from '../../interfaces/trackResponse';
import { AlbumItem, AlbumResponse } from '../../interfaces/albumResponse';
import {DividerModule} from 'primeng/divider';
import {CarouselModule} from 'primeng/carousel'
import {TagModule} from 'primeng/tag'

@Component({
    selector: 'app-music',
    standalone: true,
    templateUrl: './music.component.html',
    styleUrl: './music.component.scss',
    imports: [HeaderComponent, CardModule, ButtonModule, MinutesToHoursPipe, DividerModule, CarouselModule, TagModule]
})
export class MusicComponent implements OnInit {


  data: ArtistResponse | undefined;

  topTracks: TrackResponse | undefined;

  topAlbums: AlbumResponse | undefined;

  topTenArtists: Item[] | [] = [];

  topTenTracks: TrackItem[] | [] = [];

  topTenAlbums: AlbumItem[] | [] = [];

  responsiveOptions: any[] | undefined;



  errorMessage: string | null = null;

  constructor(private musicService: MusicService){}

  ngOnInit(): void {

    this.getTopArtists();
    this.getTopTracks();
    this.getTopAlbums();


    this.responsiveOptions = [
      {
          breakpoint: '1400px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '1220px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '1100px',
          numVisible: 1,
          numScroll: 1
      }
  ];

    };


  filterTopTenArtists(data: ArtistResponse){

    if(this.data){
      this.topTenArtists = data.items.slice(0, 10);
    } 
  
  }

  filterTopTenTracks(data: TrackResponse){
    if(this.data){
      this.topTenTracks = data.items.slice(0,10);
    }

  } //this could be one generic function ngl

  filterTopTenAlbums(data: AlbumResponse){
    if(this.data){
      this.topTenAlbums = data.items.slice(0,10);
    }

  }

  getTopArtists(){
    this.musicService.getTopArtists().subscribe(
      (response: ArtistResponse) => {
        this.data = response;

        if(this.data){
        
          this.filterTopTenArtists(this.data);
        }
      },
      (error: string) => {
        this.errorMessage = error;
      }
  )
  }

  getTopTracks(){
    this.musicService.getTopTracks().subscribe(
      (response: TrackResponse) => {
        console.log(response.items[0]);
        this.topTracks = response;

        if(this.topTracks){
          this.filterTopTenTracks(this.topTracks);
        }
      },
      (error: string) => {
        this.errorMessage = error;
      }
    )
  }


  getTopAlbums(){
    this.musicService.getTopAlbums().subscribe(
      (response: AlbumResponse) => {
        console.log(response.items[0]);
        this.topAlbums = response;

        if(this.topAlbums){
          this.filterTopTenAlbums(this.topAlbums);
        }
      },
      (error: string) => {
        this.errorMessage = error;
      }
    )
  }


  
}


