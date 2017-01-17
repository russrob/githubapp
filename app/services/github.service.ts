import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
	private username:string;
	private client_id: '9e0991b034d55f6cc6dd';
	private client_secret:'ecfbf044be9e4e9566f9a469aea82a864fe84b11';

	constructor(private _http: Http){
		console.log('Github Service is Ready...');
		this.username = 'russrob';
	}

	getUser(){
		return this._http.get('https://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
		.map(res => res.json());
	}

	getRepos(){
		return this._http.get('https://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
		.map(res => res.json());
	}
}

