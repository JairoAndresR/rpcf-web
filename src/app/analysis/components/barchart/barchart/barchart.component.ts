import {Component, Input, OnInit, OnChanges} from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit, OnChanges {

  @Input() thematicsList;

  private svg;
  private thematicsSubList = [];
  private maxProducts = 0;
  private margin = 40;
  private width = 400 - (this.margin * 2);
  private height = 400 - (this.margin * 3);

  ngOnInit(): void {
      console.log(this.thematicsList);
      this.createSvg();
      this.drawBars(this.thematicsSubList);
  }

  ngOnChanges(): void {
      this.thematicsSubList = this.thematicsList.slice(0, 9 + 1);
      this.maxProducts = Math.max.apply(Math, this.thematicsSubList.map((o) => o.count));
      this.drawBars(this.thematicsSubList);
      console.log(this.thematicsSubList);
  }

    private createSvg(): void {
    this.svg = d3.select('figure#barGroupThematics')
        .append('svg')
        .attr('width', this.width + (this.margin * 2))
        .attr('height', this.height + (this.margin * 7.4))
        .append('g')
        .attr('transform', 'translate(' + this.margin + ',' + this.margin + ')');
  }

  private drawBars(thematicsSubList: any[]): void {
      console.log(thematicsSubList);
      if (thematicsSubList.length === 0) {
          return;
      }
      // Create the X-axis band scale
      const x = d3.scaleBand()
        .range([0, this.width])
        .domain(thematicsSubList.map(d => d.value))
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
        .domain([0, this.maxProducts + (this.maxProducts * 0.1)])
        .range([this.height, 0]);

    // Draw the Y-axis on the DOM
      this.svg.append('g')
        .call(d3.axisLeft(y));

    // Create and fill the bars
      this.svg.selectAll('bars')
        .data(thematicsSubList)
        .enter()
        .append('rect')
        .attr('x', d => x(d.value))
        .attr('y', d => y(d.count))
        .attr('width', x.bandwidth())
        .attr('height', (d) => this.height - (y(d.count)))
        .attr('fill', '#2E46D8');
  }
}
