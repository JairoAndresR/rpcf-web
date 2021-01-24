import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { gruplacProductQuery } from './../../models/gruplac-product-query.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductReportService {

  constructor(private http: HttpClient) { }

  countAllByGroups(thematic: string,
                   idProductTypeSelected: string,
                   idResearcherSelected: string,
                   startDate: string,
                   endDate: string): Observable<gruplacProductQuery[]> {
    return this.http.get<gruplacProductQuery[]>(`${environment.url_api}/products/reports?groupType=group_name&tittle=${thematic}&productType${idProductTypeSelected}&researcher${idResearcherSelected}&startDate${startDate}&endDate${endDate}`);
  }
}
