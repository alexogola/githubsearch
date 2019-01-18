import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private username = 'lex-of-pakawa';
  private client_id = 'f9c23f736d6ecbbe42ec';
  private client_secret = 'ff510d303934c61f69d04c849d943ba15d7a4940';

  constructor(private _http:Http){
          console.log('Github Service Init...');
      }

      getUser(){
          return this._http.get('https://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
              .map(res => res.json());
      }

      getRepos(){
          return this._http.get('https://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
              .map(res => res.json());
      }

      updateUsername(username:string){
          this.username = username;
      }
  }
