import { Component, Input, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import Highcharts3D from 'highcharts/highcharts-3d';
Highcharts3D(Highcharts);

interface pieData {
  Framework?: string;
  Stars?: string;
  Released?: string;
  color?: string;
  name?: string;
  y?: number;
  sliced?: boolean;
  selected?: boolean;
}

@Component({
  selector: 'ptg-ui-high-3d-pie-chart',
  templateUrl: './high-3d-pie-chart.component.html',
  styleUrls: ['./high-3d-pie-chart.component.scss']
})
export class High3dPieChartComponent implements AfterViewInit {
  @Input() data: pieData[] | [string, number][] = [];
  @Input() remainingOptions: any = {};
  @Input() title: string = '';
  @Input() seriesName: string = '';
  @Input() isCreditEnabled = false;

  @ViewChild('chartContainer', { static: true }) chartContainer!: ElementRef;

  ngAfterViewInit(): void {
    this.createChartPie();
  }

  private createChartPie(): void {
    Highcharts.chart(this.chartContainer.nativeElement, {
      chart: {
        type: 'pie',
        backgroundColor: null,
        options3d: {
          enabled: true,
          alpha: 45,
          beta: 0,
          frame: { visible: false }
        }
      },
      title: {
        text: this.title
      },
      accessibility: {
        point: {
          valueSuffix: '%'
        }
      },
      credits: {
        enabled: this.isCreditEnabled
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          depth: 35,
          dataLabels: {
            enabled: true,
            format: '{point.name}'
          }
        }
      },
      series: [{
        type: 'pie',
        name: this.seriesName || 'Share',
        data: this.data
      }],
      ...this.remainingOptions
    } as any);
  }
}
