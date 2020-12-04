import { Component, OnInit } from '@angular/core';
import { Gruplac } from 'src/app/core/models/gruplac.model';
import { GruplacService } from 'src/app/core/services/gruplac/gruplac.service';

@Component({
  selector: 'app-gruplac-table',
  templateUrl: './gruplac-table.component.html',
  styleUrls: ['./gruplac-table.component.css']
})
export class GruplacTableComponent implements OnInit {

  gruplacs: Gruplac[];
  displayedColumns: string[] = ['ID', 'Nombre', 'URL', 'Acciones']

  constructor(private gruplacService: GruplacService) { }

  ngOnInit(): void {
    this.getAllGruplacs()
  }

  getAllGruplacs(){
    //this.gruplacs = this.gruplacService.getAllGruplacs()
    this.gruplacService.getAllGruplacs().subscribe(
      definitions => {
        this.gruplacs = definitions['definitions']
      }
    )
  }

  deleteGruplac(id: string){
    console.log(id)
    this.gruplacService.deleteGruplac(id)
    this.getAllGruplacs()
  }

}
