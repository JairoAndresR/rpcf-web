import { Component, Input, OnInit } from '@angular/core';
import * as d3 from 'd3'

@Component({
  selector: 'app-barchart-groupvsproducts',
  templateUrl: './barchart-groupvsproducts.component.html',
  styleUrls: ['./barchart-groupvsproducts.component.css']
})
export class BarchartGroupvsproductsComponent implements OnInit {
  @Input() gruplacProductsQueryList;
  private svg;
  private margin = 40;
  private width = 300 - (this.margin * 2);
  private height = 200 - (this.margin * 3);

  ngOnInit(): void {
    this.createSvg();
    this.drawBars(this.gruplacProductsQueryList);
  }

  private createSvg(): void {
    this.svg = d3.select('figure#bargroup')
    .append('svg')
    .attr('width', this.width + (this.margin * 2))
    .attr('height', this.height + (this.margin * 7.4))
    .append('g')
    .attr('transform', 'translate(' + this.margin + ',' + this.margin + ')');
  }

  private drawBars(gruplacProductsQueryList: any[]): void {
    // Create the X-axis band scale
    const xAxis = d3.scaleBand()
      .range([0, this.width])
      .domain(gruplacProductsQueryList.map(d => d.value))
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
      .domain([0, 40])
      .range([this.height, 0]);

    // Draw the Y-axis on the DOM
    this.svg.append('g')
      .call(d3.axisLeft(yAxis));

    // Create and fill the bars
    this.svg.selectAll('bars')
      .data(gruplacProductsQueryList)
      .enter()
      .append('rect')
      .attr('x', d => xAxis(d.value))
      .attr('y', d => Number(yAxis(d.count)))
      .attr('width', xAxis.bandwidth())
      .attr('height', (d) => this.height - Number(yAxis(d.count)))
      .attr('fill', '#2E46D8');
  }

}
