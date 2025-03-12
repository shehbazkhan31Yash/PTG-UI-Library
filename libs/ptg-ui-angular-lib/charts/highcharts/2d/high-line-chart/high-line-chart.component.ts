/**
 * @since March 2022
 * @author Aakash Patidar
 * @Component Line Chart;
 * @description This module used for reusable line chart
 */

import { AfterViewInit, Component, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';

interface lineData2d  {
  name: string,
  data: number[]
}

HighchartsMore(Highcharts);

@Component({
  selector: 'ptg-ui-high-line-chart',
  templateUrl: './high-line-chart.component.html',
  styleUrls: ['./high-line-chart.component.scss']
})
export class HighLineChartComponent implements AfterViewInit {
  @Input() data: lineData2d[] = [];
  @Input() categories: string[] = [];
  @Input() id = 'line-chart';
  @Input() isCreditEnabled = false;
  // We have used ngAfterViewInit becauce of chart dynamic Id
  ngAfterViewInit(){
    this.createChartLine();
  }

  // Chart configuration 
  private createChartLine(): void {
    Highcharts.chart(this.id, {
      chart: {
        type: 'line',
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
        title: {
          text: null,
        }
      },
      xAxis: {
        categories: this.categories,
        type: 'category',
      },
      tooltip: {
        headerFormat: `<div>Date: {point.key}</div>`,
        pointFormat: `<div>{series.name}: {point.y}</div>`,
        shared: true,
        useHTML: true,
      },
     series: this.data
    } as any);
  }
}
