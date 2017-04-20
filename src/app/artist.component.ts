import { Component } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { SearchService } from './search.service';


@Component({
  selector: 'artist-comp',
  templateUrl: './artist.component.html',
  providers: [SearchService],
  styleUrls: ['./artist.component.css']
})

export class artistComponent {
 name: string;
 imageSrc: string;
 albumsArray: any[];
 constructor( private searchService: SearchService, private activatedRoute: ActivatedRoute){
  this.activatedRoute.params.subscribe((params: Params) => {
    let id = params['id'];
    this.searchService.getArtist(id)
    .subscribe(res =>{
      console.log("res",res);
      this.name= res.name;
      this.imageSrc= res.images[2].url;
      this.searchService.getAlbums(id)
      .subscribe(res => {
        console.log ("albums", res.items)
        this.albumsArray = res.items;
      })
    });    
  });
 }
}
