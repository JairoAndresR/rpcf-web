import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-results-advanced-search',
  templateUrl: './results-advanced-search.component.html',
  styleUrls: ['./results-advanced-search.component.css']
})
export class ResultsAdvancedSearchComponent implements OnChanges {

  @Input() resultsAdvancedSearch;

  ngOnChanges(): void {}

}
