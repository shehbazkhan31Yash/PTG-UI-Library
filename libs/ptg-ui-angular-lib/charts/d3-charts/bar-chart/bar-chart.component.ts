/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * @since March 2022
 * @author Aakash Patidar
 * @Component D3 Bar Chart;
 * @description This module used for reusable D3 bar chart
 */

import { Component, Input, OnChanges } from '@angular/core';
import * as d3 from 'd3';

interface barData {
  Framework: string, Stars: string, Released: string, color: string
}

@Component({
  selector: 'ptg-ui-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnChanges {
  // Basic inputs
  @Input() data: barData[] = [];
  @Input() margin = 20;
  @Input() width: string | number | any = "0";
  @Input() height: string | number | any = "0";
  @Input() start = 0;
  @Input() end = 0;
  @Input() id = "bar";
 // Mock data for 3d bar chart
 public BAR_CHART_3D = {
  data: [
    {
      name: 'Year 1800',
      data: [107, 120, 635, 203, 300, 203, 300]
    }
  ],
  categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania', 'Canada', 'Uk']
}



  svg: any;

  ngOnChanges() {
    d3.select('figure#' + this.id).selectAll('*').remove();
    this.svg = d3
      .select('figure#' + this.id) //returns a selection object that encapsulates the first element in the DOM with a CSS class of "bar"
      .append('svg') //Appends a new element of this type (tag name) as the last child of each selected element
      .attr('width', parseInt(this.width, this.margin)) //Sets the attribute with the specified name to the specified value on the selected elements and returns this selection
      .attr('height', parseInt(this.height, this.margin))
      .attr("viewBox", [0, 0, this.width, this.height])
      // .attr("style", "max-width: 100%; height: auto; height: intrinsic;")
      .append('g')
      .attr('transform', 'translate(' + this.margin + ',' + this.margin + ')');

      this.drawBars(this.data);

  }


  private drawBars(data: any[]): void {
    // Create the X-axis band scale
    const x = d3
      .scaleBand()
      .range([0, this.width])
      .domain(data.map((d) => d.Framework))
      .padding(0.2);


    // Draw the X-axis on the DOM
    this.svg
      .append('g') //g element is used to group SVG shapes together
      .attr('transform', 'translate(0,' + this.height + ')')
      .call(d3.axisBottom(x))
      .selectAll('text')
      .attr('transform', 'translate(-10,0)rotate(-45)')
      .style('text-anchor', 'end');

    // Create the Y-axis band scale
    const y = d3
      .scaleLinear()
      .domain([this.start, this.end])
      .range([this.height, 0]);

    // Draw the Y-axis on the DOM
    this.svg.append('g').call(d3.axisLeft(y));

    // Create and fill the bars
    this.svg
      .selectAll('bars')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d: any) => x(d.Framework))
      .attr('y', (d: any) => y(d.Stars))
      .attr('width', x.bandwidth())
      .attr('height', (d: any) => this.height - y(d.Stars))

      .attr('fill', (d: any, i: any) => {
        return d.color;
      });
  }

  ngAfterViewInit(): void {
    this.drawBars(this.data);
  }

}
