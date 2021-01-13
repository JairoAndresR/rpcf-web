import { Component, OnInit } from '@angular/core';
import { ScrappingService } from "../../../core/services/scrapping/scrapping.service";
import jwt_decode  from "jwt-decode";

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  userName: string;

  constructor(private scrappingService: ScrappingService) { }

  ngOnInit(): void {
    this.userName = this.getNameByToken()
  }

  runScrapping(){
    this.scrappingService.runScrapping().subscribe(
      response => {
        console.log(response)
      }
    )
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
