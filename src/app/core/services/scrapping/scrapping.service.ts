import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ScrappingService {

  constructor(private http: HttpClient) { }

  runScrapping(){
    return this.http.post(`${environment.url_api}/gruplacs/scraping`, {})
  }
  
}