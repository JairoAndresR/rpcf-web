import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-results-advanced-search',
  templateUrl: './product-result.component.html',
  styleUrls: ['./product-result.component.css']
})
export class ProductResultComponent implements OnInit, OnChanges {

  @Input() products;

  ngOnInit(): void {}

  ngOnChanges(): void {
    console.log(this.products);
  }

}
