import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Researcher } from "./../../models/researcher.model";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ResearcherService {

  constructor(private http: HttpClient) { }

  getAllResearchers(idGruplacSelected){
    return this.http.get<Researcher>(`${environment.url_api}/authors?groupCode=${idGruplacSelected}`);
  }
}
