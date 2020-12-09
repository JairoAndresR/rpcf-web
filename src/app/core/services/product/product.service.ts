import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Product } from '../../models/product.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAllDefinitions(){
    return this.http.get<Product[]>(`${environment.url_api}/product-definitions`)
  }

  getProduct(id:string){
    return this.http.get<Product>(`${environment.url_api}/product-definitions/${id}`)
  }

  newProduct(product:Product){
    return this.http.post<Product>(`${environment.url_api}/product-definitions`, product)
  }

  deleteProduct(id:string){
    return this.http.delete<Product>(`${environment.url_api}/product-definitions/${id}`)
  }

  updateProduct(product:Product){
    return this.http.put(`${environment.url_api}/product-definitions/${product.id}`, product)
  }


}
