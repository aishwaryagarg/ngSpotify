import { Injectable } from "@angular/core";
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class SearchService {
	constructor (private http: Http){}
	getMusic(searchTerm: string){
		let url = `https://api.spotify.com/v1/search?q=${searchTerm}&type=artist`
		return this.http.get(url).map(res => res.json());
	}
	getArtist(id: string){
		let url = `https://api.spotify.com/v1/artists/${id}`
		return this.http.get(url).map(res => res.json());
	}
	getAlbums(artist_id: string):any {
		let url =`https://api.spotify.com/v1/artists/${artist_id}/albums`;
		return this.http.get(url).map(res => res.json());
	}
	getAlbum(id: string){
		let url = `https://api.spotify.com/v1/albums/${id}`
		return this.http.get(url).map(res => res.json());
	}
}