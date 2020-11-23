import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HomeInfo } from '../../models/home-info';
import { HomeService } from '../../services/home.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeInfo: HomeInfo
  
  constructor(private homeService:HomeService) {
   }

  ngOnInit(): void {
    this.getHomeNumbers()
  }

  getHomeNumbers(){
    this.homeService.getHomeNumbers().subscribe(homeInfo => {
      this.homeInfo=homeInfo
      //this.homeInfo=this.homeService.getHomeNumbers()
    });
  }

}
