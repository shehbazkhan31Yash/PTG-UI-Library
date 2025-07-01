import {
  AfterViewInit,
  Component,
  Input,
  ViewChild,
  ElementRef,
} from '@angular/core';
import * as Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';

interface lineData2d {
  name: string;
  data: number[];
}

HighchartsMore(Highcharts);

@Component({
  selector: 'ptg-ui-high-line-chart',
  templateUrl: './high-line-chart.component.html',
  styleUrls: ['./high-line-chart.component.scss'],
})
export class HighLineChartComponent implements AfterViewInit {
  @Input() data: lineData2d[] = [];
  @Input() categories: string[] = [];
  @Input() isCreditEnabled = false;

  @ViewChild('chartContainer', { static: true }) chartContainer!: ElementRef;

  ngAfterViewInit() {
    this.createChartLine();
  }

  private createChartLine(): void {
    if (!this.chartContainer) return;

    Highcharts.chart(this.chartContainer.nativeElement, {
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
        },
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
      series: this.data,
    } as any);
  }
}
