import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Gruplac } from "./../../models/gruplac.model";

@Injectable({
  providedIn: 'root'
})
export class GruplacService {

  gruplacs: Gruplac[] = [
    {
      id: '1',
      name: 'grupo 1',
      url: 'prueba.com'
    },
    {
      id: '2',
      name: 'grupo 2',
      url: 'prueba.com'
    }
  ]

  constructor(private http: HttpClient) { }

  getAllGruplacs(){
    return this.gruplacs
  }

  deleteGruplac(id: string){
    this.gruplacs = this.gruplacs.filter((value, index, arr)=>{
      return value.id != id
    })
  }

  newGruplac(gruplac: Gruplac){
    this.gruplacs.push(gruplac)
  }
}
