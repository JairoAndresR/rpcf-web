import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ReportResult } from '../../models/report-result.model';
import {Observable} from 'rxjs';
import {NewProductParams} from './product-params';

@Injectable({
  providedIn: 'root'
})
export class ProductReportService {

  constructor(private http: HttpClient) { }

  countAllByGroups(title: string,
                   typeName: string,
                   groupLACCode: string,
                   startDate: string,
                   endDate: string): Observable<ReportResult[]> {
      let url = `${environment.url_api}/products/reports?groupType=group_name`;
      const params: any[] = NewProductParams(title, typeName, groupLACCode, startDate, endDate);

      if (params.length > 0) {
          url += `&${params.join('&')}`;
      }

      return this.http.get<ReportResult[]>(url);
  }
}
