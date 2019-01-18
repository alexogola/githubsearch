import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
Import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private username = 'lex-of-pakawa';
  private client_id = 'f9c23f736d6ecbbe42ec';
  private client_secret = 'ff510d303934c61f69d04c849d943ba15d7a4940';

  constructor(private _http:Http) {
   console.log('Github service init...');
   }
}
