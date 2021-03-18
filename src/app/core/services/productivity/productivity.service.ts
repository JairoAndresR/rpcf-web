import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ReportResult} from './../../models/report-result.model';
import { environment } from './../../../../environments/environment';
// import {ProductFact} from "../../models/product-fact.model";

@Injectable({
  providedIn: 'root'
})
export class ProductivityService {

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  getProductivityClasification(){
    // model type missing
    return this.http.get<ReportResult[]>(`${environment.url_api}/products/reports/categories`);
  }
}
