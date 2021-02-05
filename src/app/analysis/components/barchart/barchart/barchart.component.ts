import {Component, Input, OnInit} from '@angular/core';
import * as d3 from "d3";

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {

  // @Input() mostWorkedThematics;
  mostWorkedThematics = [
      {word:'inteligencia', weight: '40'},
      {word:'datos', weight: '32'},
      {word:'arificial', weight: '30'},
      {word:'digitales', weight: '25'},
      {word:'sistema', weight: '22'},
      {word:'sistema', weight: '15'},
      {word:'sistema', weight: '14'},
      {word:'redes', weight: '10'},
      {word:'energía', weight: '5'},
      {word:'aprendizaje', weight: '1'},];


private svg;
  private margin = 40;
  private width = 400 - (this.margin * 2);
  private height = 400 - (this.margin * 3);

  ngOnInit(): void {
    this.createSvg();
    this.drawBars(this.mostWorkedThematics);
  }

  private createSvg(): void {
    this.svg = d3.select('figure#barGroupThematics')
        .append('svg')
        .attr('width', this.width + (this.margin * 2))
        .attr('height', this.height + (this.margin * 7.4))
        .append('g')
        .attr('transform', 'translate(' + this.margin + ',' + this.margin + ')');
  }

  private drawBars(mostWorkedThematics: any[]): void {
    // Create the X-axis band scale
    const x = d3.scaleBand()
        .range([0, this.width])
        .domain(mostWorkedThematics.map(d => d.word))
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
        .domain([0, 50])
        .range([this.height, 0]);

    // Draw the Y-axis on the DOM
    this.svg.append('g')
        .call(d3.axisLeft(y));

    // Create and fill the bars
    this.svg.selectAll('bars')
        .data(mostWorkedThematics)
        .enter()
        .append('rect')
        .attr('x', d => x(d.word))
        .attr('y', d => Number(y(d.weight)))
        .attr('width', x.bandwidth())
        .attr('height', (d) => this.height - Number(y(d.weight)))
        .attr('fill', '#2E46D8');
  }
}
