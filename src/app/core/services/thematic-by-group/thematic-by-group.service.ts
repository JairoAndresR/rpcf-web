import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { ThematicByGroup } from './../../models/thematic-by-group';

@Injectable({
  providedIn: 'root'
})
export class ThematicByGroupService {

  constructor(private http: HttpClient) { }

  getMostWorkedThematics(selectedGroupLacName){
    return this.http.get<ThematicByGroup>(`${environment.url_api}/products/reports/words-frequencies?groupName=${selectedGroupLacName}`);
  }

}
