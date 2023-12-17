import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseUrl = 'https://localhost:5001/api/';
  constructor(private httpclient: HttpClient) { }

  postService(url: string, reqBody: any, token: boolean, httpAuthOptions: any) {
    return this.httpclient.post(this.baseUrl + url, reqBody, token && httpAuthOptions);
  }
  updateService(url: string, reqBody: any, token: boolean, httpAuthOptions: any) {
    return this.httpclient.put(this.baseUrl + url, reqBody, token && httpAuthOptions);
  }
  getservices(url: string, token: boolean, httpAuthOptions: any) {
    return this.httpclient.get(this.baseUrl + url, token && httpAuthOptions);
  }
  deleteService(url: string, token: boolean, httpAuthOptions: any) {
    return this.httpclient.delete(this.baseUrl + url, token && httpAuthOptions);
  }
}
