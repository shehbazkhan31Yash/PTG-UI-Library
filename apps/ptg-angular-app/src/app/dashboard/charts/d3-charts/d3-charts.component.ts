import { Component, OnInit } from '@angular/core';

import { resources } from '../../../../resource/resource';
import { chartService } from '@ptg-angular-app/common/data-services/chart.service';
@Component({
  selector: 'ptg-ui-d3-charts',
  templateUrl: './d3-charts.component.html',
  styleUrls: ['./d3-charts.component.scss'],
})
export class D3ChartsComponent implements OnInit {
  title = 'angular-d3';
  resources = resources;
  isLoaded = true;
  barChartHtmlCode = `
  <ptg-ui-bar-chart [data]="data" [width]="width" [height]="height" [margin]="margin"
                    [start]="start" [end]="end">
  </ptg-ui-bar-chart>`;

  barChartTsCode = `
  import { Component } from '@angular/core';

  @Component({
    selector: 'd3-chart-component',
    templateUrl: './d3-chart.component.html'
  })
  export class D3ChartComponent {
    // Data required for the Chart
    height:500,
    width:500,
    margin:50,
    start: 0,
    end: 160000,
    data: [
      { Framework: 'Vue', Stars: '100000', Released: '2014', color: '#454545' },
      { Framework: 'React', Stars: '120793', Released: '2013', color: 'blue' },
      { Framework: 'Angular', Stars: '92342', Released: '2016', color: 'green' },
      {
        Framework: 'Backbone',
        Stars: '67647',
        Released: '2010',
        color: 'orange',
      },
      { Framework: 'Ember', Stars: '121471', Released: '2011', color: 'pink' },
    ],
  }`;

  pieChartHtml = `
    <ptg-ui-pie-chart [data]="data" [colorsArray]="colors"></ptg-ui-pie-chart>
  `;
  pieChartTsCode = `
    import { Component } from '@angular/core';

    @Component({
      selector: 'pie-chart-component',
      templateUrl: './pie-chart.component.html'
    })
    export class PieChartComponent {
      // Data required for the Pie Chart
      colors:['#8D8741', '#659DBD', '#DAAD86', '#BC986A', '#FBEEC1', '#242582'],
      data: [
        { Framework: 'Vuee', Stars: '100000', Released: '2014', color: '#454545' },
        { Framework: 'React', Stars: '120793', Released: '2013', color: 'blue' },
        { Framework: 'Angular', Stars: '92342', Released: '2016', color: 'green' },
        {
          Framework: 'Backbone',
          Stars: '67647',
          Released: '2010',
          color: 'orange',
        },
        { Framework: 'Ember', Stars: '121471', Released: '2011', color: 'pink' },
      ]
    }`;

  lineChartHtml = `
    <ptg-ui-line-chart [data]="data" [margin]="margin" [width]="width" [height]="height">
    </ptg-ui-line-chart>
  `;
  lineChartTsCode = `
    import { Component } from '@angular/core';

    @Component({
      selector: 'line-chart-component',
      templateUrl: './line-chart.component.html'
    })
    export class LineChartComponent {
      // Data required for the Line Chart
      height:330,
      margin:{ top: 100, right: 10, bottom: 15, left: 25 };,
      width:550,
      colors:['#8D8741', '#659DBD', '#DAAD86', '#BC986A', '#FBEEC1', '#242582'],
      data: [
          {
              "date": 100,
              "value": 130
          },
          {
              "date": 340,
              "value": 300
          },
          {
              "date": 600,
              "value": 1000
          }
      ]
    }`;

  barChartData: any = {
    data: [],
  };
  pieChartData: any = {
    data: [],
  };
  lineChartData: any = {
    data: [],
  };
  constructor(private chartApiService: chartService) {}

  ngOnInit(): void {
    this.chartApiService.getD3BarList().subscribe((response) => {
      const result = response?.data[0].attributes;
      if (result?.data.length) {
        this.barChartData = {
          margin: 50,
          start: 0,
          end: 160000,
          height: "450",
          width: "450",
          title: result.title,
          source: result.source,
          x_title: result.x_title,
          y_title: result.y_title,
          data: result.data,
        };
      }
    });

    //pie chart
    this.chartApiService.getD3PieList().subscribe((response) => {
      const pieChartData = response?.data[0].attributes;
      const color = pieChartData.colors.split(',');
      if (pieChartData?.piedata.length) {
        this.pieChartData = {
          height: pieChartData.height,
          width: pieChartData.width,
          title: pieChartData.title,
          source: pieChartData.source,
          x_title: pieChartData.x_title,
          y_title: pieChartData.y_title,
          colors: color,
          data: pieChartData.piedata,
        };
      }
    });

    //line chart
    this.chartApiService.getD3LineChart().subscribe((response) => {
      const data1 = response?.data[0].attributes.data.map((e) => ({
        date: new Date(e.date),
        value: e.value,
      }));
      if (data1.length) {
        this.lineChartData = {
          data: data1,
          margin: { top: 20, right: 20, bottom: 50, left: 70 },
          width: 560,
          height: 400,
        };
      }
    });
  }
}
