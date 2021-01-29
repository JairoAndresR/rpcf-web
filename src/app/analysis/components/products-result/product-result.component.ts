import {Component, Input, OnChanges, OnInit, ViewChild, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { Product } from '../../../core/models/product.model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-results-advanced-search',
  templateUrl: './product-result.component.html',
  styleUrls: ['./product-result.component.css']
})

export class ProductResultComponent implements OnInit, OnChanges, OnDestroy {

  @Input() products;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  obs: Observable<any>;
  dataSource: MatTableDataSource<Product>;

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.dataSource = new MatTableDataSource<Product>(this.products);
    this.changeDetectorRef.detectChanges();
    this.dataSource.paginator = this.paginator;
    this.obs = this.dataSource.connect();
  }

  ngOnDestroy() {
    if (this.dataSource) {
      this.dataSource.disconnect();
    }
  }

}
