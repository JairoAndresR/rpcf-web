import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';
import { Gruplac } from "../../../core/models/gruplac.model";
import { GruplacService } from "../../../core/services/gruplac/gruplac.service"

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  gruplacDefinitions: Gruplac = null
  gruplacNames: string[]

  constructor(private gruplacService : GruplacService) { }

  ngOnInit(): void {
    this.getGruplacsDefinitions()
  }

  getGruplacsDefinitions(){
    this.gruplacService.getAllGruplacs().subscribe(gruplacDefinitions => {
      this.gruplacDefinitions=gruplacDefinitions
      console.log(gruplacDefinitions["definitions"][0].name)
      for(var i=0; i<=gruplacDefinitions["total"]-1;i++){
        this.gruplacNames[i] = gruplacDefinitions["definitions"][i].name
        console.log(this.gruplacNames[i])
      }
    });
  }


  //Capture data will send data to the backend to realize the search of products with these characteristics
  captureData(inTemathic, inProductType, inGroup, inResearcher, inStartDate, inEndDate){
    console.log(inTemathic)
    console.log(inProductType)
    console.log(inGroup)
    console.log(inResearcher)
    console.log(inStartDate)
    console.log(inEndDate)
  }
}
