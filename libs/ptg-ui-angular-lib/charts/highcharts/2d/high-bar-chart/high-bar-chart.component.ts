/**
 * @since March 2022
 * @author Aakash Patidar
 * @Component Bar Chart;
 * @description This module used for reusable bar chart
 */

import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

interface bar2dData {
  name: string; data: number[];
}

@Component({
  selector: 'ptg-ui-high-bar-chart',
  templateUrl: './high-bar-chart.component.html',
  styleUrls: ['./high-bar-chart.component.scss']
})

export class HighBarChartComponent implements OnInit {
  @Input() data: bar2dData[]  = [];
  @Input() id = "chart-column";
  @Input() isCreditEnabled = false;
  
  ngOnInit(): void {
    
  // Call function to create chart 
  this.createChartColumn();
  }

  // Function for create chart 
  createChartColumn(): void {
    Highcharts.chart(this.id as any, {
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
