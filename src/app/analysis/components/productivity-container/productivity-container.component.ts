import { Component, OnInit } from '@angular/core';
import {ProductivityService} from '../../../core/services/productivity/productivity.service';
import { ReportResult } from '../../../core/models/report-result.model';

@Component({
  selector: 'app-productivity-container',
  templateUrl: './productivity-container.component.html',
  styleUrls: ['./productivity-container.component.css']
})
export class ProductivityContainerComponent implements OnInit {
  productivityReport: ReportResult[] = [];

  constructor(private productivityService: ProductivityService) { }

  ngOnInit(): void {
    this.getProductivityReport();
  }

  getProductivityReport(): void {
    this.productivityService.getProductivityClasification().subscribe(report => {
      this.productivityReport = report;
    });
    console.log(this.productivityReport);
  }

}
