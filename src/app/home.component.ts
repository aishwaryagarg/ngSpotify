import { Component } from '@angular/core';

import { SearchService } from './search.service';


@Component({
  selector: 'home-comp',
  templateUrl: './home.component.html',
  providers: [SearchService],
  styleUrls: ['./home.component.css']
})
export class homeComponent {
 constructor( private searchService: SearchService){}
  title = 'app works!';
  searchTerm: string;
  artistArray: any[];
  searchMusic(): void{
  	console.log("in search music", this.searchTerm);
  	this.searchService.getMusic(this.searchTerm)
  	.subscribe(res =>{
  		console.log("res",res.artists.items);
  		this.artistArray = res.artists.items;  		
  	});
  }
}
