import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Gruplac } from "./../../models/gruplac.model";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GruplacService {

  constructor(private http: HttpClient) { }

  getAllGruplacs(){
    return this.http.get<Gruplac>(`${environment.url_api}/gruplac-definitions`)
    //return this.gruplacs
  }

  deleteGruplac(id: string){
    return this.http.delete(`${environment.url_api}/gruplac-definitions/${id}`)
  }

  getGruplac(id: string){
    console.log(id)
    return this.http.get<Gruplac>(`${environment.url_api}/gruplac-definitions/${id}`)
  }

  updateGruplac(gruplac: Gruplac){
    return this.http.put<Gruplac>(`${environment.url_api}/gruplac-definitions/${gruplac.id}`, gruplac)
  }

  newGruplac(gruplac: Gruplac){
    return this.http.post<Gruplac>(`${environment.url_api}/gruplac-definitions`, gruplac)
  }
}
