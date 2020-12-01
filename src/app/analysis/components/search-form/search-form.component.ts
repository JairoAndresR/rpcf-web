import { Component, OnInit } from '@angular/core';
import { GruplacDefinitionsService } from "../../services/gruplacDefinitions.service";
import { GruplacDefinitions } from "../../models/gruplac-definitions";
import { ProductDefinitionsService } from "../../services/product-definitions.service";
import { ProductDefinitions } from "../../models/product-definitions";

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  gruplacDefinitions: GruplacDefinitions
  productDefinitions: ProductDefinitions
  
  constructor(private gruplacDefinitionsService:GruplacDefinitionsService,
              private productDefinitionsService:ProductDefinitionsService) { }

  ngOnInit(): void {
    this.getGruplacsDefinitions()
    this.getProductsDefinitions()
  }

  getGruplacsDefinitions(){
    this.gruplacDefinitionsService.getGruplacDefinitions().subscribe(gruplacDefinitions => {
      this.gruplacDefinitions=gruplacDefinitions
    });
  }

  getProductsDefinitions(){
    this.productDefinitionsService.getProductDefinitions().subscribe(productDefinitions => {
      this.productDefinitions=productDefinitions
    });
  }

  //Capture data will send data to the backend to realize the search of products with these characteristics
  captureData(inTemathic, inProductType, inGroup, inResearcher, inStartDate, inEndDate, inDoi){
    console.log(inTemathic)
    console.log(inProductType)
    console.log(inGroup)
    console.log(inResearcher)
    console.log(inStartDate)
    console.log(inEndDate)
    console.log(inDoi)
  }
}
