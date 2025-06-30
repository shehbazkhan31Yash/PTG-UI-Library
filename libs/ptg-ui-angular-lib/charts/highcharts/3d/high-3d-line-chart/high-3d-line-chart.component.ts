import { Component, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import Highcharts3d from 'highcharts/highcharts-3d';
Highcharts3d(Highcharts);

interface linebar3dData {
  name: string, data: number[]
}

@Component({
  selector: 'ptg-ui-high-3d-line-chart',
  templateUrl: './high-3d-line-chart.component.html',
  styleUrls: ['./high-3d-line-chart.component.scss']
})
export class High3dLineChartComponent implements AfterViewInit {
  @Input() data: linebar3dData[] = [];
  @Input() remainingOptions: any = {};
  @Input() title = '';
  @Input() categories: string[] = [];
  @Input() xTitle = '';
  @Input() yTitle = '';
  @Input() isCreditEnabled = false;

  @ViewChild('chartContainer', { static: true }) chartContainer!: ElementRef;

  ngAfterViewInit(): void {
    this.createChartLine();
  }

  private createChartLine(): void {
    Highcharts.chart(this.chartContainer.nativeElement, {
      chart: {
        type: 'line',
        options3d: {
          enabled: true,
          alpha: 15,
          beta: 15,
          depth: 50,
          viewDistance: 50
        },
      },
      title: { text: this.title },
      xAxis: {
        categories: this.categories,
        title: { text: this.xTitle }
      },
      yAxis: {
        title: { text: this.yTitle }
      },
      plotOptions: {
        column: { depth: 5 }
      },
      credits: {
        enabled: this.isCreditEnabled
      },
      series: this.data,
      ...this.remainingOptions
    } as any);
  }
}
