import {Component, Input, OnChanges, OnInit} from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: ' app-barchart-group-and-products',
  templateUrl: './barchart-group-and-products.component.html',
  styleUrls: ['./barchart-group-and-products.component.css']
})
export class BarchartGroupAndProductsComponent implements OnInit, OnChanges {
  @Input() reportList;
  private svg;
  private maxProducts = 10;
  private margin = 40;
  private width = 300 - (this.margin * 2);
  private height = 300 - (this.margin * 3);

  ngOnInit(): void {
    this.createSvg();
    this.drawBars(this.reportList);
  }

  ngOnChanges(): void {
    this.maxProducts = Math.max.apply(Math, this.reportList.map((o) => o.count));
    this.drawBars(this.reportList);
  }

  private createSvg(): void {
    this.svg = d3.select('figure#bargroup')
    .append('svg')
    .attr('width', this.width + (this.margin * 2))
    .attr('height', this.height + (this.margin * 7.4))
    .append('g')
    .attr('transform', 'translate(' + this.margin + ',' + this.margin + ')');
  }

  private drawBars(reportList: any[]): void {
    // Elimina todas las barras antiguas
    this.svg.selectAll('rect').remove();

    // Limpia el objeto SVG
    this.svg.selectAll('*').remove();
    if (reportList.length === 0) {
      return;
    }

    // Create the X-axis band scale
    const xAxis = d3.scaleBand()
      .range([0, this.width])
      .domain(reportList.map(d => d.value))
      .padding(0.2);

    // Draw the X-axis on the DOM
    this.svg.append('g')
      .attr('transform', 'translate(0,' + this.height + ')')
      .call(d3.axisBottom(xAxis))
      .selectAll('text')
      .attr('transform', 'translate(-10,0)rotate(-45)')
      .style('text-anchor', 'end');

    // Create the Y-axis band scale
    const yAxis = d3.scaleLinear()
      .domain([0, this.maxProducts+(this.maxProducts * 0.1)])
      .range([this.height, 0]);

    // Draw the Y-axis on the DOM
    this.svg.append('g')
      .call(d3.axisLeft(yAxis));

    // Create and fill the bars
    this.svg.selectAll('bars')
      .data(reportList)
      .enter()
      .append('rect')
      .attr('x', report => xAxis(report.value))
      .attr('y', report => yAxis(report.count))
      .attr('width', xAxis.bandwidth())
      .attr('height', (report) => this.height - yAxis(report.count))
      .attr('fill', '#2E46D8');
  }

}
