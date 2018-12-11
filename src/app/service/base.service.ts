import { Injectable } from '@angular/core';
// http
import { HttpClient, HttpHeaders } from '@angular/common/http';
// base url
import { base } from '../baseurl';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  constructor(private http: HttpClient) { }
  // Request
  public get (param) {
    return this.http.get<any>(`${base.url}${param}`);
  }
  public post (param1, param2) {
    return this.http.post(`${base.url}${param1}`, param2);
  }
}
