import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Gruplac } from "./../../models/gruplac.model";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GruplacService {

  gruplacs: Gruplac[] = [
    {
      id: 'a1c4eb68-fa1d-4960-9506-be68c06ed3d0',
      name: 'dsdsd',
      url: 'prueba.com'
    },
    {
      id: 'ddf7909c-2f68-4f94-b016-c2c4f69034ab',
      name: 'prueba',
      url: 'prueba.com'
    }
  ]

  constructor(private http: HttpClient) { }

  getAllGruplacs(){
    //return this.http.get(`${environment.url_api}/gruplac-definitions`)
    return this.gruplacs
  }

  deleteGruplac(id: string){
    return this.http.delete(`${environment.url_api}/gruplac-definitions/${id}`)
  }

  getGruplac(id: string){
    return this.http.get<Gruplac>(`${environment.url_api}/gruplac-definitions/${id}`)
  }

  updateGruplac(gruplac: Gruplac){
    return this.http.put<Gruplac>(`${environment.url_api}/gruplac-definitions/${gruplac.id}`, gruplac)
  }

  newGruplac(gruplac: Gruplac){
    return this.http.post<Gruplac>(`${environment.url_api}/gruplac-definitions`, gruplac)
  }
}
