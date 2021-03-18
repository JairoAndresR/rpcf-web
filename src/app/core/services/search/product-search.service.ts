import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Product } from '../../models/product.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductSearchService {

  constructor(private http: HttpClient) { }

  getAllProducts(thematic: string,
                 idProductTypeSelected: string,
                 idGruplacSelected: string,
                 idResearcherSelected: string,
                 startDate: string,
                 endDate: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.url_api}/products?tittle=${thematic}&productType${idProductTypeSelected}&gruplac${idGruplacSelected}&researcher${idResearcherSelected}&startDate${startDate}&endDate${endDate}`);
  }
}
  