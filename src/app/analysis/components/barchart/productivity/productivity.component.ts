import { Component, OnInit } from '@angular/core';
import {ProductivityService} from '../../../../core/services/productivity/productivity.service';
import * as d3 from "d3";

@Component({
  selector: 'app-productivity',
  templateUrl: './productivity.component.html',
  styleUrls: ['./productivity.component.css']
})
export class ProductivityComponent implements OnInit {

 // @Input() mostWorkedThematics;
 // mostWorkedThematics = [
 //   {word:'Inv. Aplicada', weight: '270'},
 //   {word:'Inv. Pura', weight: '0'},
 //   {word:'Formacion', weight: '0'},
 //   {word:'Consultoria', weight: '0'},];

  productivityReport: any;

  private svg;
  private margin = 40;
  private width = 400 - (this.margin * 2);
  private height = 400 - (this.margin * 3);

  constructor(private productivityService: ProductivityService) {
  }

  ngOnInit(): void {
    this.getProductivityReport();
    this.createSvg();
    this.drawBars(this.productivityReport);
  }

  getProductivityReport(): void {
    this.productivityService.getProductivityClasification().subscribe(report => {
      this.productivityReport = report;
    });
  }

  private createSvg(): void {
    this.svg = d3.select('figure#productivity')
        .append('svg')
        .attr('width', this.width + (this.margin * 2))
        .attr('height', this.height + (this.margin * 7.4))
        .append('g')
        .attr('transform', 'translate(' + this.margin + ',' + this.margin + ')');
  }

  private drawBars(productivityReport: any[]): void {
    // Create the X-axis band scale
    const x = d3.scaleBand()
        .range([0, this.width])
        .domain(productivityReport.map(d => d.word))
        .padding(0.2);

    // Draw the X-axis on the DOM
    this.svg.append('g')
        .attr('transform', 'translate(0,' + this.height + ')')
        .call(d3.axisBottom(x))
        .selectAll('text')
        .attr('transform', 'translate(-10,0)rotate(-45)')
        .style('text-anchor', 'end');

    // Create the Y-axis band scale
    const y = d3.scaleLinear()
        .domain([0, 280])
        .range([this.height, 0]);

    // Draw the Y-axis on the DOM
    this.svg.append('g')
        .call(d3.axisLeft(y));

    // Create and fill the bars
    this.svg.selectAll('bars')
        .data(productivityReport)
        .enter()
        .append('rect')
        .attr('x', d => x(d.word))
        .attr('y', d => Number(y(d.weight)))
        .attr('width', x.bandwidth())
        .attr('height', (d) => this.height - Number(y(d.weight)))
        .attr('fill', '#2E46D8');
  }

}
