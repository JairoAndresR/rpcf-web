import { Component, OnInit } from '@angular/core';
import { GruplacService } from "../../../core/services/gruplac/gruplac.service"
import { ProductFactService } from "../../../core/services/product-fact/product-fact.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  totalGruplac: number = 0;
  totalProducts: number = 0;
  constructor(private gruplacDefinitionsService:GruplacService,
              private productFactService:ProductFactService) {
   }

  ngOnInit(): void {
    this.getHomeNumbers();
  }

  getHomeNumbers(){
    this.gruplacDefinitionsService.getAllGruplacs().subscribe(homeInfo => {
      this.totalGruplac=homeInfo["total"];
    });
    this.productFactService.getAllProducts().subscribe(producstInfo => {
      this.totalProducts = producstInfo["total"];
    });
  }

}
