/**
 * @since March 2022
 * @author Aakash Patidar
 * @Component 3D Pie Chart;
 * @description This module used for reusable 3D pie chart
 */

import { Component, Input, OnInit } from '@angular/core';
import * as d3 from 'd3';
interface pieData {
  Framework: string, Stars: string, Released: string, color: string
}


@Component({
  selector: 'ptg-ui-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})

export class PieChartComponent implements OnInit {
  @Input() data: pieData[] | [string, number] = [];
  @Input() svg: any;
  @Input() margin: number = 50;
  @Input() width: number = 750;
  @Input() height: number = 600;
  @Input() colorsArray: string[] = ['#8D8741', '#659DBD', '#DAAD86', '#BC986A', '#FBEEC1', '#242582'];
  @Input() id = "pie";

  // The radius of the pie chart is half the smallest side
  //  private radius = Math.min(this.width, this.height) / 2 - this.margin;
  private radius: any;
  private colors: any;

  private createSvg(): void {

    this.radius = Math.min(this.width, this.height) / 2 - this.margin;

    this.svg = d3
      .select('figure#' + this.id)
      .append('svg')
      .attr('width', this.width)
      .attr('height', this.height)
      .attr("viewBox", [0, 0, this.width, this.height])
      .attr("style", "max-width: 100%; height: auto; height: intrinsic;")
      .append('g')
      .attr(
        'transform',
        'translate(' + this.width / 2 + ',' + this.height / 2 + ')'
      );
  }

  private createColors(): void {
    this.colors = d3
      .scaleOrdinal()
      .domain(this.data.map((d: any) => d.Stars.toString()))
      .range(this.colorsArray);
  }

  private drawChart(): void {
    // Compute the position of each group on the pie:
    const pie = d3.pie<any>().value((d: any) => Number(d.Stars));

    // Build the pie chart
    this.svg
      .selectAll('pieces')
      .data(pie(this.data))
      .enter()
      .append('path')
      .attr('d', d3.arc().innerRadius(0).outerRadius(this.radius))
      .attr('fill', (d: any, i: any) => this.colors(i))
      .attr('stroke', '#ffffff')
      .style('stroke-width', '1px');

    // Add labels
    const labelLocation = d3.arc().innerRadius(100).outerRadius(this.radius);

    this.svg
      .selectAll('pieces')
      .data(pie(this.data))
      .enter()
      .append('text')
      .text((d: any) => d.data.Framework)
      .attr(
        'transform',
        (d: any) => 'translate(' + labelLocation.centroid(d) + ')'
      )
      .style('text-anchor', 'middle')
      .style('font-size', 15);
  }

  ngOnInit(): void {
    this.createSvg();
    this.createColors();
    this.drawChart();
  }

}
