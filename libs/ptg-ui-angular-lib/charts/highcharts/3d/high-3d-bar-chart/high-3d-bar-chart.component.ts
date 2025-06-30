import { Component, Input, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import Highcharts3d from 'highcharts/highcharts-3d';
Highcharts3d(Highcharts);

@Component({
  selector: 'ptg-ui-high-3d-bar-chart',
  templateUrl: './high-3d-bar-chart.component.html',
  styleUrls: ['./high-3d-bar-chart.component.scss']
})
export class High3dBarChartComponent implements AfterViewInit {
  @Input() data: { name: string, data: number[] }[] = [];
  @Input() remainingOptions: any = {};
  @Input() title: string = "";
  @Input() categories?: string[];
  @Input() xTitle: string = "";
  @Input() yTitle: string = "";
  @Input() isCreditEnabled = false;

  @ViewChild('chartContainer', { static: true }) chartContainer!: ElementRef;

 
  ngAfterViewInit(): void {
    this.createChartColumn();
  }

  createChartColumn(): void {
    Highcharts.chart(this.chartContainer.nativeElement, {
      title: { text: this.title },
      chart: {
        type: 'bar',
        options3d: {
          enabled: true,
          alpha: 15,
          beta: 15,
          depth: 50,
          viewDistance: 50
        },
      },
      plotOptions: {
        column: { depth: 5 }
      },
      xAxis: {
        categories: this.categories,
        title: { text: this.xTitle }
      },
      yAxis: {
        title: { text: this.yTitle }
      },
      credits: {
        enabled: this.isCreditEnabled,
      },
      series: this.data,
      ...this.remainingOptions
    } as any);
  }
}
