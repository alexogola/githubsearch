import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username:string;
  private clientid = 'f9c23f736d6ecbbe42ec';
  private clientsecret = 'ff510d303934c61f69d04c849d943ba15d7a4940';

  constructor(private http:Http) { }
}
