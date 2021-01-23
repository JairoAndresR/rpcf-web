import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Product } from "../../models/product.model";

@Injectable({
  providedIn: 'root'
})
export class ResultsAdvancedSearchService {

  constructor(private http: HttpClient) { }

  getAllAdvancedResearchResults(temathic: string, idProductTypeSelected: string, idGruplacSelected: string, idResearcherSelected: string, startDate: string, endDate: string){
    return this.http.get<Product[]>(`${environment.url_api}/products?tittle=${temathic}&productType${idProductTypeSelected}&gruplac${idGruplacSelected}&researcher${idResearcherSelected}&startDate${startDate}&endDate${endDate}`)
  }
}
