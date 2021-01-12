import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { researcherProductQuery } from "./../../models/researcher-product-query.model";

@Injectable({
  providedIn: 'root'
})
export class ResearcherProductService {

  constructor(private http: HttpClient) { }

  getAllResearcherProductsQuery(temathic, idProductTypeSelected, idGruplacSelected, startDate, endDate){
    return this.http.get<researcherProductQuery[]>(`${environment.url_api}/products/gruplacs?tittle=${temathic}&productType${idProductTypeSelected}&researcher${idGruplacSelected}&startDate${startDate}&endDate${endDate}`)
  }

  //getAllResearcherProductsQuery(temathic, idProductTypeSelected, idGruplacSelected, startDate, endDate){  
  //var data = [
  //  {"Researcher": "Cristian Chaparro", "Products": "30"},
  //  {"Researcher": "David Aparicio", "Products": "20"},
  //  {"Researcher": "Jairo Andres Romero Triana", "Products": "15"},
  //  {"Researcher": "Investigador 4", "Products": "5"},
  //  {"Researcher": "Investigador 5", "Products": "2"},
  //];
  //  return data
  //}

}
