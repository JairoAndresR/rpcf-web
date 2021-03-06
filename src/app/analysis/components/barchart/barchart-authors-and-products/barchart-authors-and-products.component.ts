  import { Component, Input, OnInit } from '@angular/core';
import { from } from 'rxjs';
import * as d3 from 'd3';

@Component({
  selector: 'app-barchart-authors-and-products',
  templateUrl: './barchart-authors-and-products.component.html',
  styleUrls: ['./barchart-authors-and-products.component.css']
})
export class BarchartAuthorsAndProductsComponent implements OnInit {
  @Input() researcherProductsQueryList;
  private svg;
  private margin = 40;
  private width = 300 - (this.margin * 2);
  private height = 200 - (this.margin * 3);

  ngOnInit(): void {
    this.createSvg();
    this.drawBars(this.researcherProductsQueryList);
  }

  private createSvg(): void {
    this.svg = d3.select('figure#barauthor')
    .append('svg')
    .attr('width', this.width + (this.margin * 2))
    .attr('height', this.height + (this.margin * 7.4))
    .append('g')
    .attr('transform', 'translate(' + this.margin + ',' + this.margin + ')');
  }

  private drawBars(researcherProductsQueryList: any[]): void {
    // Create the X-axis band scale
    const x = d3.scaleBand()
    .range([0, this.width])
    .domain(researcherProductsQueryList.map(d => d.Researcher))
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
    .domain([0, 40])
    .range([this.height, 0]);

    // Draw the Y-axis on the DOM
    this.svg.append('g')
    .call(d3.axisLeft(y));

    // Create and fill the bars
    this.svg.selectAll('bars')
    .data(researcherProductsQueryList)
    .enter()
    .append('rect')
    .attr('x', d => x(d.Researcher))
    .attr('y', d => Number(y(d.Products)))
    .attr('width', x.bandwidth())
    .attr('height', (d) => this.height - Number(y(d.Products)))
    .attr('fill', '#2E46D8');
  }

}
