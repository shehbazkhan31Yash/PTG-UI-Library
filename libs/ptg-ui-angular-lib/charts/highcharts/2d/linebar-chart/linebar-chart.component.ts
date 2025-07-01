import { Component, Input, OnChanges, SimpleChanges, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'ptg-ui-linebar-chart',
  templateUrl: './linebar-chart.component.html',
  styleUrls: ['./linebar-chart.component.scss']
})
export class LinebarChartComponent implements OnChanges, AfterViewInit {
  @Input() remainingOptions: any;
  @Input() title?: any;
  @Input() subtitle?: any;
  @Input() categories?: string[] = [];
  @Input() isCreditEnabled = false;

  @ViewChild('chartContainer', { static: false }) chartContainer!: ElementRef;

  private chartInitialized = false;

  ngAfterViewInit(): void {
    this.createChartColumn();
    this.chartInitialized = true;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.chartInitialized && (changes['title'] || changes['subtitle'] || changes['remainingOptions'] || changes['categories'])) {
      this.createChartColumn();
    }
  }

  createChartColumn(): void {
    Highcharts.chart(this.chartContainer.nativeElement, {
      chart: {
        zoomType: 'xy'
      },
      subtitle: {
        text: this.subtitle
      },
      credits: {
        enabled: this.isCreditEnabled
      },
      title: {
        text: this.title
      },
      xAxis: [{
        categories: this.categories,
        crosshair: true
      }],
      ...this.remainingOptions
    });
  }
}
