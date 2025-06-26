import { Component, Input, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import * as Highcharts from 'highcharts';

interface pieData1 {
  name: string;
  selected?: boolean;
  sliced?: boolean;
  y: number;
}

@Component({
  selector: 'ptg-ui-high-pie-chart',
  templateUrl: './high-pie-chart.component.html',
  styleUrls: ['./high-pie-chart.component.scss']
})
export class HighPieChartComponent implements  AfterViewInit {
  @Input() data: pieData1[] | [string, number][] = [];
  @Input() colors: string[] = ['#242582', '#8D8741', '#659DBD', '#BC986A', '#FBEEC1'];
  @Input() isCreditEnabled = false;

  @ViewChild('chartContainer', { static: false }) chartContainer!: ElementRef;

 

  ngAfterViewInit(): void {
    this.createChartPie();
  }

  private createChartPie(): void {
    Highcharts.chart(this.chartContainer.nativeElement, {
      chart: {
        type: 'pie',
      },
      title: {
        text: null,
      },
      tooltip: {
        headerFormat: `<span class="mb-2">Date: {point.key}</span><br>`,
        pointFormat: '<span>Amount: {point.y}</span>',
        useHTML: true,
      },
      credits: {
        enabled: this.isCreditEnabled,
      },
      series: [{
        name: null,
        innerSize: '30%',
        data: this.data,
        colors: this.colors,
      }],
    } as any);
  }
}
