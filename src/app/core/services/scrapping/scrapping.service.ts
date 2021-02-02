import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrappingService {

  constructor(private http: HttpClient) { }

  runProductsScrapping(): Observable<any> {
    return this.http.post(`${environment.url_api}/collectors/products/scraping`, {});
  }

  runAuthorsScrapping(): Observable<any> {
    return this.http.post(`${environment.url_api}/collectors/authors/scraping`, {});
  }
}
