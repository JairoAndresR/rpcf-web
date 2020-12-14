import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Gruplac } from 'src/app/core/models/gruplac.model';
import { GruplacService } from 'src/app/core/services/gruplac/gruplac.service';
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-gruplac-table',
  templateUrl: './gruplac-table.component.html',
  styleUrls: ['./gruplac-table.component.css']
})
export class GruplacTableComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  gruplacs: Gruplac[];
  displayedColumns: string[] = ['ID', 'Nombre', 'URL', 'Acciones'];
  dataSource = null;

  constructor(private gruplacService: GruplacService) { }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator
  }

  ngOnInit(): void {
    this.getAllGruplacs()
  }

  getAllGruplacs(){

    this.gruplacService.getAllGruplacs().subscribe(
      definitions => {
        this.gruplacs = definitions['definitions']
      }
    )


    this.dataSource = new MatTableDataSource<Gruplac>(this.gruplacs)
  }

  deleteGruplac(id: string){
    this.gruplacService.deleteGruplac(id).subscribe(
      response => this.getAllGruplacs()
    )
    
  }

}
