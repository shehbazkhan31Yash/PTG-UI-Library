import { Component, Input, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'ptg-ui-stacked-column-chart',
  templateUrl: './stacked-column-chart.component.html',
  styleUrls: ['./stacked-column-chart.component.scss']
})
export class StackedColumnChartComponent implements AfterViewInit {
  @Input() remainingOptions: any;
  @Input() title?: any;
  @Input() subtitle?: any;
  @Input() categories?: any;
  @Input() yTitle?: any;
  @Input() isCreditEnabled = false;

  @ViewChild('chartContainer', { static: false }) chartContainer!: ElementRef;
  private chartInitialized = false;


  ngAfterViewInit(): void {
    this.createChartColumn();
    this.chartInitialized = true;
  }

  // Chart rendering logic
  createChartColumn(): void {
    Highcharts.chart(this.chartContainer.nativeElement, {
      chart: {
        type: 'column'
      },
      title: {
        text: this.title
      },
      subtitle: {
        text: this.subtitle
      },
      xAxis: {
        categories: this.categories
      },
      yAxis: {
        min: 0,
        title: {
          text: this.yTitle
        },
        stackLabels: {
          enabled: true,
          style: {
            fontWeight: 'bold',
            color: 'gray'
          }
        }
      },
      plotOptions: {
        column: {
          stacking: 'normal',
          dataLabels: {
            enabled: true
          }
        }
      },
      credits: {
        enabled: this.isCreditEnabled
      },
      ...this.remainingOptions
    } as any);
  }
}
