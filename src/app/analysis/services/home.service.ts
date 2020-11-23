import { Injectable } from '@angular/core';
import { HomeInfo } from "../models/home-info";
import { HttpClient } from "@angular/common/http";
import { environment } from "./../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  //homeInfo: HomeInfo = {numGroups:45, numProducts:156}
  constructor(private http: HttpClient) { }
  
  public getHomeNumbers() {
    return this.http.get<HomeInfo>(`${environment.url_api}/homeinfo`);
    //return this.homeInfo
}
}