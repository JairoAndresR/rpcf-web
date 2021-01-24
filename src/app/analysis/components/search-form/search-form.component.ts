import { removeSummaryDuplicates } from '@angular/compiler';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';
import { Gruplac } from '../../../core/models/gruplac.model';
import { GruplacService } from '../../../core/services/gruplac/gruplac.service'
import { Researcher } from '../../../core/models/researcher.model';
import { ResearcherService } from '../../../core/services/researcher/researcher.service'
import { ProductDefinition } from '../../../core/models/product-definition.model';
import { ProductDefinitionService } from '../../../core/services/product/product-definition.service'
import { ReportResult } from '../../../core/models/gruplac-product-query.model';
import { researcherProductQuery } from '../../../core/models/researcher-product-query.model';
import { ProductReportService } from '../../../core/services/search/product-report.service';
import { ResearcherProductService } from '../../../core/services/search/researcher-product.service';
import { Product } from '../../../core/models/product.model';
import { ProductSearchService } from '../../../core/services/search/product-search.service';
import {MatSelectChange} from '@angular/material/select';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  gruplacDefinitions: Gruplac[] = [];
  researchers: Researcher[] = [];
  productDefinitions: ProductDefinition[] = [];
  gruplacProductsQueryList: ReportResult[] = [];
  researcherProductsQueryList: researcherProductQuery[] = [];
  products: Product[] = [];
  displayGraphics = false;
  selectedGroupLacCode: string;

  constructor(private gruplacService: GruplacService,
              private researchService: ResearcherService,
              private productDefinitionService: ProductDefinitionService,
              private groupProductService: ProductReportService,
              private researcherProductService: ResearcherProductService,
              private searchService: ProductSearchService) { }

  ngOnInit(): void {
    this.getGruplacsDefinitions();
    this.getResearchers();
    this.getProductsDefinitions();
  }
  getGruplacsDefinitions(): void {
    this.gruplacService.getAllGruplacs().subscribe(gruplacDefinitions => {
      this.gruplacDefinitions = gruplacDefinitions['definitions']
    });
  }

  getProductsDefinitions(): void {
    this.productDefinitionService.getAllDefinitions().subscribe(productDefinitions => {
      this.productDefinitions = productDefinitions['Definitions'];
    });
  }

  getResearchers(): void {
    this.researchService.getAllResearchers().subscribe(researchers => {
      this.researchers = researchers['authors'];
    });
  }

  /* Capture data will send data to the backend to realize the search of products-result with these characteristics */
  captureData(thematic, idProductTypeSelected, idGruplacSelected, idResearcherSelected,
              startDate, endDate): void {

    console.log(thematic);
    console.log(idProductTypeSelected);
    console.log(idGruplacSelected);
    console.log(idResearcherSelected);
    console.log(startDate);
    console.log(endDate);


    this.searchService.getAllProducts(thematic,
        idProductTypeSelected, idGruplacSelected,
        idResearcherSelected, startDate, endDate).subscribe(resultsAdvancedSearch => {

      this.products = resultsAdvancedSearch['products'];

    });

    this.groupProductService.countAllByGroups(thematic,
        idProductTypeSelected, idResearcherSelected, startDate, endDate).subscribe(gruplacProductsQuery => {
          console.log(gruplacProductsQuery);
      this.gruplacProductsQueryList = gruplacProductsQuery['reports'];
    });


    this.displayGraphics = true;
  }

  onChangeGroup(): void {
    console.log(this.selectedGroupLacCode);
  }
}
