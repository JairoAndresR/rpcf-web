import { Component, OnInit } from '@angular/core';
import { ScrappingService } from '../../../core/services/scrapping/scrapping.service';
import jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  userName: string;

  constructor(private scrapingService: ScrappingService) { }

  ngOnInit(): void {
    this.userName = this.getNameByToken();
  }

  runProductScraping(): void{
    this.scrapingService.runProductsScrapping().subscribe(
      response => {
        console.log(response);
      }
    );
  }

  runAuthorsScraping(): void{
    this.scrapingService.runAuthorsScrapping().subscribe(response => {
      console.log(response);
    });
  }

  getNameByToken(): string{
    const decodeAccessToken: any = this.getDecodeAccessToken(this.getToken());
    return decodeAccessToken.names;
  }

  getDecodeAccessToken(token: string): any {
    try{
      return jwtDecode(token);
    }
    catch (Error){
      return null;
    }
  }

  getToken(): any {
    return JSON.parse(localStorage.getItem('token_user'));
  }
}
