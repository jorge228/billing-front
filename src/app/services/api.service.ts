import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public baseUrl: string = environment.baseUrl;

  constructor(public http: HttpClient) { }

  getHeaders(): HttpHeaders {

    let headers = new HttpHeaders();
    headers = headers
      .set('content-type', 'application/json');
    // .set('x-authorization', environment.token)
    // .set('key', environment.key);

    return headers;
  }

}
