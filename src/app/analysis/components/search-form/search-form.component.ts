import { removeSummaryDuplicates } from '@angular/compiler';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';
import { Gruplac } from "../../../core/models/gruplac.model";
import { GruplacService } from "../../../core/services/gruplac/gruplac.service"
import { Researcher } from "../../../core/models/researcher.model";
import { ResearcherService } from "../../../core/services/researcher/researcher.service"
import { ProductDefinition } from "../../../core/models/product-definition.model";
import { ProductDefinitionService } from "../../../core/services/product/product-definition.service"
import { gruplacProductQuery } from "../../../core/models/gruplac-product-query.model";
import { researcherProductQuery } from "../../../core/models/researcher-product-query.model";
import { GroupProductService } from "../../../core/services/querys/group-product.service";
import { ResearcherProductService } from "../../../core/services/querys/researcher-product.service";
import { resultAdvancedSearch } from "../../../core/models/result-advanced-search.model";
import { ResultsAdvancedSearchService } from "../../../core/services/querys/results-advanced-search.service";

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  gruplacDefinitions: Gruplac[] = []
  researchers: Researcher[] = []
  productDefinitions: ProductDefinition[] = []
  gruplacProductsQueryList: gruplacProductQuery[] = []
  researcherProductsQueryList: researcherProductQuery[] = []
  resultsAdvancedSearch: resultAdvancedSearch[]=[]

  displayGraphics = false

  constructor(private gruplacService : GruplacService,
              private researchService : ResearcherService,
              private productService : ProductDefinitionService,
              private groupProductService: GroupProductService,
              private researcherProductService: ResearcherProductService,
              private resultsAdvancedSearchService: ResultsAdvancedSearchService) { }

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

    this.groupProductService.getAllGruplacProductsQuery(temathic, idProductTypeSelected, idResearcherSelected, startDate, endDate).subscribe(gruplacProductsQuery => {
      this.gruplacProductsQueryList = gruplacProductsQuery["results"]
    });


    this.researcherProductService.getAllResearcherProductsQuery(temathic, idProductTypeSelected, idGruplacSelected, startDate, endDate).subscribe(researcherProductsQuery => {
      this.researcherProductsQueryList = researcherProductsQuery["results"]
    });

    this.resultsAdvancedSearchService.getAllAdvancedResearchResults(temathic, idProductTypeSelected, idGruplacSelected, idResearcherSelected, startDate, endDate).subscribe(resultsAdvancedSearch =>{
      this.resultsAdvancedSearch=resultsAdvancedSearch["results"]
    });

    this.displayGraphics = true
  }
}
