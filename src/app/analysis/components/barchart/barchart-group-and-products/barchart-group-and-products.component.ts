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
  tooltip = null;

  ngOnInit(): void {
    this.createSvg();
    this.drawBars(this.reportList);
  }

  ngOnChanges(): void {
    this.maxProducts = Math.max.apply(Math, this.reportList.map((o) => o.count));
    if (this.reportList.length === 0) {
      return;
    }
    this.drawBars(this.reportList);
  }

  private createSvg(): void {
    this.svg = d3.select('figure#bargroup')
    .append('svg')
    .attr('width', this.width + (this.margin * 2))
    .attr('height', this.height + (this.margin * 7.4))
    .append('g')
    .attr('transform', 'translate(' + this.margin + ',' + this.margin + ')');
    this.tooltip = d3.select('body').append('div').attr('class', 'tooltip').style('opacity', 0);
  }

  private drawBars(reportList: any[]): void {
    // Elimina todas las barras antiguas
    this.svg.selectAll('rect').remove();
    console.log("its ok 1");
    // Limpia el objeto SVG
    this.svg.selectAll('*').remove();
    console.log("its ok 2");
    console.log(reportList.length);

    // Create the X-axis band scale
    const xAxis = d3.scaleBand()
      .range([0, this.width])
      .domain(reportList.map(d => d.value))
      .padding(0.2);
    console.log("its ok 3");
    // Draw the X-axis on the DOM
    this.svg.append('g')
      .attr('transform', 'translate(0,' + this.height + ')')
      .call(d3.axisBottom(xAxis))
      .selectAll('text')
      .attr('transform', 'translate(-10,0)rotate(-45)')
      .style('text-anchor', 'end');
    console.log("its ok 4");
    // Create the Y-axis band scale
    const yAxis = d3.scaleLinear()
      .domain([0, this.maxProducts+(this.maxProducts * 0.1)])
      .range([this.height, 0]);
    console.log("its ok 5");
    // Draw the Y-axis on the DOM
    this.svg.append('g')
      .call(d3.axisLeft(yAxis));
    console.log("its ok 6");
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
    console.log("its ok 7");
    this.svg.selectAll('rect')
        .on('mouseover', (event, d) => {
          this.tooltip.transition().duration(200).style('opacity', 0.9);
          this.tooltip.html(d.count)
              .style('left', (event.pageX + 10) + 'px')
              .style('top', (event.pageY - 28) + 'px');
        })
        .on('mouseout', (event, d) => {
          this.tooltip.transition().duration(500).style('opacity', 0);
        });
    console.log("its ok 8");
  }

}
