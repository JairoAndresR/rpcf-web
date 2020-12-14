import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ProductFact } from '../../models/product-fact.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductFactService {

  constructor(private http: HttpClient) { }

  getAllProducts(){
    return this.http.get<ProductFact[]>(`${environment.url_api}/products`)
  }
}
