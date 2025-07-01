/**
 * @since March 2022
 * @author Aakash Patidar
 * @Component D3 Line Chart;
 * @description This module used for reusable D3 line chart
 */

import { Component, Input } from '@angular/core';
import * as d3 from "d3";

interface lineData {
  date: string, value: string
}

@Component({
  selector: 'ptg-ui-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent {

  // Here is some inputs that create chart 
  @Input() data: lineData[] = [];
  @Input() margin = { top: 10, right: 10, bottom: 10, left: 10 };
  @Input() width = 0;
  @Input() height = 0;
  @Input() id = "line";
  @Input() color = "steelblue";
  @Input() coordinateDataTypes = {
    "xData": "number",
    "yData": "number"
  };
  ngOnChanges() {
    if (this.data?.length) {
      this.createGraph();
    }

  }

  ngAfterViewInit(): void {
    this.createGraph();
  }

  // Chart creation function 
  createGraph() {
    // Clear the chart container first
    d3.select("figure#" + this.id).selectAll("*").remove();

    // Dimensions
    const margin = this.margin,
      d3width = this.width - margin.left - margin.right,
      d3height = this.height - margin.top - margin.bottom;

    // Create SVG
    const svg = d3.select("figure#" + this.id)
      .append("svg")
      .attr("width", this.width)
      .attr("height", this.height)
      .attr("viewBox", [0, 0, this.width, this.height])
      .attr("style", "max-width: 100%; height: auto; height: intrinsic;")
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

    // Axes setup
    const x = d3.scaleTime().range([0, d3width]);
    const y = d3.scaleLinear().range([d3height, 0]);

    // Parse data
    const parsedData = this.data.map(d => ({
      date: new Date(d.date),
      value: +d.value
    }));

    x.domain(d3.extent(parsedData, d => d.date) as [Date, Date]);
    y.domain([0, d3.max(parsedData, d => d.value) as number]);

    // Draw axes
    svg.append("g")
      .attr("transform", `translate(0, ${d3height})`)
      .call(d3.axisBottom(x).ticks(6));

    svg.append("g")
      .call(d3.axisLeft(y).ticks(6));

    // Draw line
    const line = d3.line<any>()
      .x(d => x(d.date))
      .y(d => y(d.value));

    svg.append("path")
      .datum(parsedData)
      .attr("fill", "none")
      .attr("stroke", this.color)
      .attr("stroke-width", 1.5)
      .attr("d", line);
  }

}