import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ReportResult } from '../../models/report-result.model';
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
                   endDate: string): Observable<ReportResult[]> {
    return this.http.get<ReportResult[]>(`${environment.url_api}/products/reports?groupType=group_name&tittle=${thematic}&productType${idProductTypeSelected}&researcher${idResearcherSelected}&startDate${startDate}&endDate${endDate}`);
  }
}
