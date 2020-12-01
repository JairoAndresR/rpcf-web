import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "./../../../environments/environment";
import { ProductDefinitions } from "../models/product-definitions";

@Injectable({
  providedIn: 'root'
})
export class ProductDefinitionsService {

  constructor(private http: HttpClient) { }

  public getProductDefinitions() {
    return this.http.get<ProductDefinitions>(`${environment.url_api}/v1/product-definitions`);
  }
}
