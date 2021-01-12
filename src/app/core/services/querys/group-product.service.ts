import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { gruplacProductQuery } from "./../../models/gruplac-product-query.model";
@Injectable({
  providedIn: 'root'
})
export class GroupProductService {

  constructor(private http: HttpClient) { }

  getAllGruplacProductsQuery(temathic: string, idProductTypeSelected: string, idResearcherSelected: string, startDate: string, endDate: string){
    return this.http.get<gruplacProductQuery[]>(`${environment.url_api}/products/gruplacs?tittle=${temathic}&productType${idProductTypeSelected}&researcher${idResearcherSelected}&startDate${startDate}&endDate${endDate}`)
  }

}
