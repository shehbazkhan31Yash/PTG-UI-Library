import { Component, Input, OnChanges, SimpleChanges, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import * as d3 from 'd3';

interface pieData {
  Framework: string;
  Stars: string;
  Released: string;
  color: string;
}

@Component({
  selector: 'ptg-ui-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnChanges, AfterViewInit {
  @Input() data: pieData[] = [];
  @Input() margin = 50;
  @Input() width = 750;
  @Input() height = 600;
  @Input() colorsArray: string[] = ['#8D8741', '#659DBD', '#DAAD86', '#BC986A', '#FBEEC1', '#242582'];

  @ViewChild('chartContainer', { static: true }) chartContainer!: ElementRef;

  private svg: any;
  private radius: any;
  private colors: any;

  ngAfterViewInit(): void {
    this.renderChart();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] && this.chartContainer) {
      this.renderChart();
    }
  }

  private renderChart(): void {
    if (!this.chartContainer) return;

    d3.select(this.chartContainer.nativeElement).selectAll('*').remove();

    this.radius = Math.min(this.width, this.height) / 2 - this.margin;

    this.svg = d3.select(this.chartContainer.nativeElement)
      .append('svg')
      .attr('width', this.width)
      .attr('height', this.height)
      .attr('viewBox', [0, 0, this.width, this.height])
      .attr('style', 'max-width: 100%; height: auto; height: intrinsic;')
      .append('g')
      .attr('transform', `translate(${this.width / 2}, ${this.height / 2})`);

    this.colors = d3.scaleOrdinal()
      .domain(this.data.map((d: any) => d.Stars.toString()))
      .range(this.colorsArray);

    const pie = d3.pie<any>().value((d: any) => Number(d.Stars));
    const arc = d3.arc().innerRadius(0).outerRadius(this.radius);
    const labelLocation = d3.arc().innerRadius(100).outerRadius(this.radius);

    this.svg.selectAll('pieces')
      .data(pie(this.data))
      .enter()
      .append('path')
      .attr('d', arc)
      .attr('fill', (d: any, i: any) => this.colors(i))
      .attr('stroke', '#ffffff')
      .style('stroke-width', '1px');

    this.svg.selectAll('pieces')
      .data(pie(this.data))
      .enter()
      .append('text')
      .text((d: any) => d.data.Framework)
      .attr('transform', (d: any) => `translate(${labelLocation.centroid(d)})`)
      .style('text-anchor', 'middle')
      .style('font-size', 15);
  }
}
