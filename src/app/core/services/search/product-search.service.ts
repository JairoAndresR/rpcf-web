import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Product } from '../../models/product.model';
import {Observable} from 'rxjs';
import {NewProductParams} from './product-params';

@Injectable({
  providedIn: 'root'
})
export class ProductSearchService {

  constructor(private http: HttpClient) { }

  getAllProducts(title: string,
                 typeName: string,
                 groupLACCode: string,
                 startDate: string,
                 endDate: string,
                 idResearcher: string): Observable<Product[]> {

    let url = `${environment.url_api}/products`;
    const params: any[] = NewProductParams(title, typeName, groupLACCode, startDate, endDate, idResearcher);

    if (params.length > 0) {
      url += `?${params.join('&')}`;
    }
    console.log(url);
    return this.http.get<Product[]>(url);
  }
}
