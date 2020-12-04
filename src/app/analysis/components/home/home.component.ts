import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Gruplac } from "../../../core/models/gruplac.model";
import { GruplacService } from "../../../core/services/gruplac/gruplac.service"


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  totalGruplac: number = 0
  totalProducts: number = 0
  constructor(private gruplacDefinitionsService:GruplacService) {
   }

  ngOnInit(): void {
    this.getHomeNumbers()
  }

  getHomeNumbers(){
    this.gruplacDefinitionsService.getAllGruplacs().subscribe(homeInfo => {
      this.totalGruplac=homeInfo["total"]     
    });
  }

}
