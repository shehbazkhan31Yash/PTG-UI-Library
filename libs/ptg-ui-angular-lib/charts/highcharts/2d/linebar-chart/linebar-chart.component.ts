import { Component, Input, OnInit ,SimpleChanges , OnChanges } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'ptg-ui-linebar-chart',
  templateUrl: './linebar-chart.component.html',
  styleUrls: ['./linebar-chart.component.scss']
})
export class LinebarChartComponent implements OnInit, OnChanges {
  @Input() remainingOptions:any;
  @Input() title?:any;
  @Input() subtitle?:any;
  @Input() categories?: string[] = [];
  @Input() id?:string = "linebar-3d-chart";
  @Input() isCreditEnabled = false;

  ngOnInit(): void {
  // Call function to create chart 
  this.createChartColumn();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['title'] || changes['subtitle']) {
      // Recreate the chart when input properties change
      this.createChartColumn();
    }
  }

  // Function for create chart 
  createChartColumn(): void {
    Highcharts.chart(this.id as any, {
       chart: {
        zoomType: 'xy'
    },
    
    subtitle:{
        text:this.subtitle 
    },
    credits: {
      enabled: this.isCreditEnabled,
    },
    title:{
        text:this.title
    },
    xAxis: [{
        categories: this.categories,
        crosshair: true
    }],
    ...this.remainingOptions
    } as any);
  }
}
