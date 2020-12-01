import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GruplacDefinitions } from "../../models/gruplac-definitions";
import { GruplacDefinitionsService } from "../../services/gruplacDefinitions.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeInfo: GruplacDefinitions
  
  constructor(private gruplacDefinitionsService:GruplacDefinitionsService) {
   }

  ngOnInit(): void {
    this.getHomeNumbers()
  }

  getHomeNumbers(){
    this.gruplacDefinitionsService.getGruplacDefinitions().subscribe(homeInfo => {
      this.homeInfo=homeInfo
      
    });
  }

}
