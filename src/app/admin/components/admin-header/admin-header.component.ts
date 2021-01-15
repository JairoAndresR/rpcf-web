import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode  from "jwt-decode";

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {

  userName: string;

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.userName = this.getNameByToken()
  }

  logout(){
    localStorage.removeItem("token_user")
    this.router.navigate(['/accounts/login'])
  }
  getNameByToken(): string{
    let decoded_token: any = this.getDecodeAccessToken(this.getToken())
    return decoded_token.names
  }

  getDecodeAccessToken(token: string):any{
    try{
      return jwt_decode(token)
    }
    catch (Error){
      return null;
    }
  }

  getToken(){
    return JSON.parse(localStorage.getItem("token_user"))
  }

}
