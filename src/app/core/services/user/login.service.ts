import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "./../../../../environments/environment";
import { User } from "../../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  loginUser(user: User) {
    return this.http.post<User>(`${environment.url_api}/accounts/login`,user)
  }
}
