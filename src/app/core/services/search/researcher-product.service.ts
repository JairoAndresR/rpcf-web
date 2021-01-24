import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { researcherProductQuery } from './../../models/researcher-product-query.model';

@Injectable({
  providedIn: 'root'
})
export class ResearcherProductService {

  constructor(private http: HttpClient) { }

  getAllResearcherProductsQuery(thematic, idProductTypeSelected, idGruplacSelected, startDate, endDate) {
    return this.http.get<researcherProductQuery[]>(`${environment.url_api}/products/gruplacs?tittle=${thematic}&productType${idProductTypeSelected}&gruplac${idGruplacSelected}&startDate${startDate}&endDate${endDate}`)
  }

}
