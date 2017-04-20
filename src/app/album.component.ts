import { Component } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { SearchService } from './search.service';


@Component({
  selector: 'album-comp',
  templateUrl: './album.component.html',
  providers: [SearchService],
  styleUrls: ['./album.component.css']
})

export class albumComponent {
 album: any;
 constructor( private searchService: SearchService, private activatedRoute: ActivatedRoute){
  this.activatedRoute.params.subscribe((params: Params) => {
    let id = params['id'];
    this.searchService.getAlbum(id)
    .subscribe(res =>{
      console.log("res",res);
      this.album = res;
      /*
      this.searchService.getAlbums(id)
      .subscribe(res => {
        console.log ("albums", res.items)
        this.albumsArray = res.items;
      })
      */
    });    
  });
 }
}
