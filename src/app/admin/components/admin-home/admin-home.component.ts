import { Component, OnInit } from '@angular/core';
import { ScrappingService } from "../../../core/services/scrapping/scrapping.service";

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  constructor(private scrappingService: ScrappingService) { }

  ngOnInit(): void {
    
  }

  runScrapping(){
    this.scrappingService.runScrapping().subscribe(
      response => {
        console.log(response)
      }
    )
  }

}
