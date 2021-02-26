import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductivityService {

  constructor(private http: HttpClient) { }

  getProductivityClasification(){
    // model type missing
    return this.http.get(`${environment.url_api}/products/reports/categories`);
  }
}
