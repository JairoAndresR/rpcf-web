import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-results-advanced-search',
  templateUrl: './results-advanced-search.component.html',
  styleUrls: ['./results-advanced-search.component.css']
})
export class ResultsAdvancedSearchComponent implements OnInit {

  @Input() resultsAdvancedSearch
  
  constructor() { }

  ngOnInit(): void {
  }

}
