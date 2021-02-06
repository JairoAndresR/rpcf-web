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

  countAllByGroups(title: string,
                   typeName: string,
                   idResearcherSelected: string,
                   startDate: string,
                   endDate: string): Observable<ReportResult[]> {
      let url = `${environment.url_api}/products/reports?groupType=group_name`;
      if (title) {
        url += `?tittle=${title}`;
      }

      if (typeName) {
        url += `&typeName=${typeName}`;
      }

      if (startDate) {
        url += `&startDate=${startDate}`;
      }

      if (endDate) {
        url += `&endDate${endDate}`;
      }

      return this.http.get<ReportResult[]>(url);
  }
}
