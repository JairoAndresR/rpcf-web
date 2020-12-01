import { Injectable } from '@angular/core';
import { GruplacDefinitions } from "../models/gruplac-definitions";
import { HttpClient } from "@angular/common/http";
import { environment } from "./../../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class GruplacDefinitionsService {
  constructor(private http: HttpClient) { }

  public getGruplacDefinitions() {
    return this.http.get<GruplacDefinitions>(`${environment.url_api}/v1/gruplac-definitions`);
  }
}

