import { Component, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import * as Highcharts from 'highcharts';

interface bar2dData {
  name: string;
  data: number[];
}

@Component({
  selector: 'ptg-ui-high-bar-chart',
  templateUrl: './high-bar-chart.component.html',
  styleUrls: ['./high-bar-chart.component.scss']
})
export class HighBarChartComponent implements AfterViewInit {
  @Input() data: bar2dData[] = [];
  @Input() isCreditEnabled = false;
  @ViewChild('chartContainer', { static: true }) chartContainer!: ElementRef;

  ngAfterViewInit(): void {
    this.createChartColumn();
  }

  createChartColumn(): void {
    if (!this.chartContainer) return;

    Highcharts.chart(this.chartContainer.nativeElement, {
      chart: {
        type: 'column',
      },
      title: {
        text: undefined,
      },
      credits: {
        enabled: this.isCreditEnabled,
      },
      legend: {
        enabled: false,
      },
      yAxis: {
        min: 0,
        title: undefined,
      },
      xAxis: {
        type: 'category',
      },
      tooltip: {
        headerFormat: `<div>Date: {point.key}</div>`,
        pointFormat: `<div>{series.name}: {point.y}</div>`,
        shared: true,
        useHTML: true,
      },
      plotOptions: {
        bar: {
          dataLabels: {
            enabled: true,
          },
        },
      },
      series: this.data
    } as any);
  }
}
