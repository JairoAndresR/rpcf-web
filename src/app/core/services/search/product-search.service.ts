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

  getAllProducts(title: string,
                 typeName: string,
                 groupLACCode: string,
                 startDate: string,
                 endDate: string): Observable<Product[]> {

    let url = `${environment.url_api}/products`;
    let params: any[] = [];
    if (title) {
      params.push( `tittle=${title}`);
    }

    if (groupLACCode) {
      params.push(`groupCode=${groupLACCode}`);
    }

    if (typeName) {
      params.push(`typeName=${typeName}`);
    }

    if (startDate) {
      params.push(`startDate=${startDate}`);
    }

    if (endDate) {
      params.push(`endDate${endDate}`);
    }

    if (params.length > 0) {
      url += `?${params.join('$')}`;
    }
    console.log(url);
    return this.http.get<Product[]>(url);
  }
}
