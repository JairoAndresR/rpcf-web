import { removeSummaryDuplicates } from '@angular/compiler';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';
import { Gruplac } from "../../../core/models/gruplac.model";
import { GruplacService } from "../../../core/services/gruplac/gruplac.service"
import { Researcher } from "../../../core/models/researcher.model";
import { ResearcherService } from "../../../core/services/researcher/researcher.service"
import { Product } from "../../../core/models/product.model";
import { ProductService } from "../../../core/services/product/product.service"

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  gruplacDefinitions: Gruplac[] = []
  researchers: Researcher[] = []
  productDefinitions: Product[] = []

  constructor(private gruplacService : GruplacService,
              private researchService : ResearcherService,
              private productService : ProductService) { }

  ngOnInit(): void {
    this.getGruplacsDefinitions()
    this.getResearchers()
    this.getProductsDefinitions()
  }
  getGruplacsDefinitions(){
    this.gruplacService.getAllGruplacs().subscribe(gruplacDefinitions => {
      this.gruplacDefinitions=gruplacDefinitions["definitions"]
    });
  }
  
  getProductsDefinitions(){
    this.productService.getAllDefinitions().subscribe(productDefinitions => {
      this.productDefinitions = productDefinitions["Definitions"]
    });
  }

  getResearchers(){
    this.researchService.getAllResearchers().subscribe(researchers =>{
      this.researchers=researchers["authors"]
    })
  }

  //Capture data will send data to the backend to realize the search of products with these characteristics
  captureData(temathic, idProductTypeSelected, idGruplacSelected, idResearcherSelected, startDate, endDate){
    console.log(temathic)
    console.log(idProductTypeSelected)
    console.log(idGruplacSelected)
    console.log(idResearcherSelected)
    console.log(startDate)
    console.log(endDate)
  }
}
