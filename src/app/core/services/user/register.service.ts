import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "./../../../../environments/environment";
import { User } from "../../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  registerUser(user: User){
    return this.http.post<User>(`${environment.url_api}/register`,user)
  }
}
