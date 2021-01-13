import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "./../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  isAuthenticated(){
    let userToken = this.getToken()
    return this.http.post(`${environment.url_api}/accounts/validate`,{'token':userToken})
  }

  getToken(){
    return JSON.parse(localStorage.getItem("token_user"))
  }
}
