import { Injectable } from '@angular/core';
import { HomeInfo } from "../models/home-info";
import { HttpClient } from "@angular/common/http";
import { environment } from "./../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(private http: HttpClient) { }
  
  public getHomeNumbers() {
    return this.http.get<HomeInfo>(`${environment.url_api}/v1/gruplac-definitions`);
    }
}