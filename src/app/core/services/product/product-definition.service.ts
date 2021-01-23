import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ProductDefinition } from '../../models/product-definition.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductDefinitionService {

  constructor(private http: HttpClient) { }

  getAllDefinitions(){
    return this.http.get<ProductDefinition[]>(`${environment.url_api}/product-definitions`)
  }

  getProduct(id:string){
    return this.http.get<ProductDefinition>(`${environment.url_api}/product-definitions/${id}`)
  }

  newProduct(product:ProductDefinition){
    return this.http.post<ProductDefinition>(`${environment.url_api}/product-definitions`, product)
  }

  deleteProduct(id:string){
    return this.http.delete<ProductDefinition>(`${environment.url_api}/product-definitions/${id}`)
  }

  updateProduct(product:ProductDefinition){
    return this.http.put<ProductDefinition>(`${environment.url_api}/product-definitions/${product.id}`, product)
  }
}
