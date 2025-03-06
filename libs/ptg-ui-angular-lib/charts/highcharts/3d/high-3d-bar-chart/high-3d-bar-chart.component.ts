/**
 * @since March 2022
 * @author Aakash Patidar
 * @Component 3D Bar Chart;
 * @description This module used for reusable 3D bar chart
 */

import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import Highcharts3d from 'highcharts/highcharts-3d';
Highcharts3d(Highcharts);

interface bar3dData {
   name: string, data: number[]
}
@Component({
  selector: 'ptg-ui-high-3d-bar-chart',
  templateUrl: './high-3d-bar-chart.component.html',
  styleUrls: ['./high-3d-bar-chart.component.scss']
})
export class High3dBarChartComponent implements OnInit {
  @Input() data: bar3dData[] = [];
  @Input() remainingOptions:any = {};
  @Input() highcharts?:any;
  @Input() title?:string = "";
  @Input() categories?: string[];
  @Input() xTitle?:string = "";
  @Input() yTitle?:string = "";
  @Input() isCreditEnabled = false;


  ngOnInit(): void {
  // Call function to create chart 
  this.createChartColumn();
  }

  // Function for create chart 
  createChartColumn(): void {
    Highcharts.chart('bar-chart-3d' as any, {
      title:{
        text:this.title
      },
      chart:{
        type:'bar',
        options3d: {
          enabled: true,
          alpha: 15,
          beta: 15,
          depth: 50,
          viewDistance: 50
        },
      },
      plotOptions: {
        column: {
            depth: 5
        }
    },
    xAxis: {
      categories: this.categories,
      title:{
        text:this.xTitle
      }
    },
    yAxis:{
      title:{
        text:this.yTitle
      }
    },
    credits: {
      enabled: this.isCreditEnabled,
    },
    series:this.data,
    ... this.remainingOptions
    } as any);
  }

}
