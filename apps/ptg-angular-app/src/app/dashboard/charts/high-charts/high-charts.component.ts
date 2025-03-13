/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit } from '@angular/core';
import { resources } from '../../../../resource/resource';
import { chartService } from '@ptg-angular-app/common/data-services/chart.service';

@Component({
  selector: 'ptg-ui-high-charts',
  templateUrl: './high-charts.component.html',
  styleUrls: ['./high-charts.component.scss'],
})
export class HighChartsComponent implements OnInit {
  constructor(private chartApiService: chartService) {}
  lineChart3d: any = {
    data: [],
  };
  barChart3d: any = {
    data: [],
  };
  multiLineChart3d: any = {
    data: [],
  };
  pieChart3d: any = {
    data: [],
  };
  lineBarChart: any = { categories: [] };
  stackedColumn: any = { categories: [] };

  resources = resources;
  barChart2dHtmlCode = `
  <ptg-ui-high-bar-chart [data]="barData"></ptg-ui-high-bar-chart>`;

  barChart2dTsCode = `
  import { Component } from '@angular/core';

  @Component({
    selector: 'bar-chart-component',
    templateUrl: './bar-chart.component.html'
  })
  export class BarChartComponent {
    // Data required for the Chart
    barData: [
      {
        name: 'Year 1800',
        data: [107, 120, 635, 203, 300, 203, 300]
      }
    ]
  }`;

  pieChart2dHtmlCode = `
  <ptg-ui-high-pie-chart [data]="pieData"></ptg-ui-high-pie-chart>`;

  pieChart2dTsCode = `
  import { Component } from '@angular/core';

  @Component({
    selector: 'pie-chart-component',
    templateUrl: './pie-chart.component.html'
  })
  export class PieChartComponent {
    // Data required for the Chart
    pieData:[
      ['Firefox', 45.0],
      ['IE', 26.8],
      {
          name: 'Chrome',
          y: 12.8,
          sliced: true,
          selected: true
      },
      ['Safari', 8.5],
      ['Opera', 6.2],
      ['Others', 0.7]
    ]
  }`;

  sLineChart2dHtmlCode = `
  <ptg-ui-high-line-chart [data]="sLineData" id="single-line" [categories]="categories">
  </ptg-ui-high-line-chart>`;

  sLineChart2dTsCode = `
  import { Component } from '@angular/core';

  @Component({
    selector: 'single-line-chart-component',
    templateUrl: './single-line-chart.component.html'
  })
  export class SingleLineChartComponent {
    // Data required for the Chart
    sLineData: [
      {
        name: 'Year 1800',
        data: [7.0, 6.9, 9.5, 14.5, 18.2]
      }
    ],
    categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania']
  }`;

  mLineChart2dHtmlCode = `
  <ptg-ui-high-line-chart [data]="mLineData" id="single-line" [categories]="categories">
  </ptg-ui-high-line-chart>`;

  mLineChart2dTsCode = `
  import { Component } from '@angular/core';

  @Component({
    selector: 'multi-line-chart-component',
    templateUrl: './multi-line-chart.component.html'
  })
  export class MultiLineChartComponent {
    // Data required for the Chart
    mLineData: [
      {
        name: 'Year 1500',
        data: [78, 100, 60, 400, 100]
      },
      {
        name: 'Year 1300',
        data: [100, 200, 160, 300, 200]
      }
    ],
    categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania']
  }`;

  lineBarChart2dHtmlCode = `
    <ptg-ui-linebar-chart [remainingOptions]="remainingOptions" [categories]="categories" [title]="title" [subtitle]="subtitle">
    </ptg-ui-linebar-chart>
  `;

  lineBarChart2dTsCode = `
  import { Component } from '@angular/core';

  @Component({
    selector: 'linebar-chart-component',
    templateUrl: './linebar-chart.component.html'
  })
  export class LinebarChartComponent {
    // Data required for the Line Bar Chart
    title:'My Charts',
    subtitle:"Source: WorldClimate.com",
    categories:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    remainingOptions:{
      series:[{
        name: 'Rainfall',
        type: 'column',
        //yAxis: 1,
        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
        tooltip: {
            valueSuffix: ' mm'
        }
      },
      {
        name: 'Temperature',
        type: 'spline',
        data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
        tooltip: {
            valueSuffix: '°C'
        }
      }]
    }
  }`;

  stackedChart2dHtmlCode = `
  <ptg-ui-stacked-column-chart
    [remainingOptions]="remainingOptions"
    [categories]="categories"
    [title]="title"
    [subtitle]="subtitle"
  >
  </ptg-ui-stacked-column-chart>`;

  stackedChart2dTsCode = `
  import { Component } from '@angular/core';

  @Component({
    selector: 'stacked-column-chart-component',
    templateUrl: './stacked-column-chart.component.html'
  })
  export class StackedColumnChartComponent {
    // Data required for the Stacked Column Chart
    categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas'],
    subtitle:"Source: WorldClimate.com",
    title:"Stacked Column",
    remainingOptions:{
      series: [{
        name: 'John',
        data: [5, 3, 4, 7, 2]
      }, {
          name: 'Jane',
          data: [2, 2, 3, 2, 1]
      }, {
          name: 'Patrik',
          data: [3, 4, 4, 2, 5]
      }]
    }
  }`;

  barChart3dHtmlCode = `
  <ptg-ui-high-3d-bar-chart [data]="3dData" [categories]="categories">
  </ptg-ui-high-3d-bar-chart>`;

  barChart3dTsCode = `
  import { Component } from '@angular/core';

  @Component({
    selector: 'bar-chart-component',
    templateUrl: './bar-chart.component.html'
  })
  export class BarChart3DChartComponent {
    // Data required for the Bar Chart 3D Chart
    3dData: [
      {
        name: 'Year 1800',
        data: [107, 120, 635, 203, 300, 203, 300]
      }
    ],
    categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania', 'Canada', 'Uk']
  }`;

  sLineChart3dHtmlCode = `
  <ptg-ui-high-3d-line-chart [data]="sLineData" [categories]="categories" id="single-line-chart">
  </ptg-ui-high-3d-line-chart>
  `;

  mLineChart3dHtmlCode = `
  <ptg-ui-high-3d-line-chart [data]="mLineData" [categories]="categories" id="multi-line-chart">
  </ptg-ui-high-3d-line-chart>`;

  pieChart3dHtmlCode = `
  <ptg-ui-high-3d-pie-chart [data]="pieData"></ptg-ui-high-3d-pie-chart>`;

  ngOnInit(): void {
    // linechart2D
    this.chartApiService.getLineChart2D().subscribe((response) => {
      const chartData = response?.data[0]?.attributes;
      const category = chartData?.categories.split(',');
      if (chartData.data.length) {
        this.lineChart3d = {
          data: chartData.data,
          categories: category,
        };
      }
    });
    // barchart3D
    this.chartApiService.getBarChart3D().subscribe((response) => {
      const barChartData = response?.data[0]?.attributes;
      const category = barChartData?.categories.split(',');
      if (barChartData?.data.length) {
        this.barChart3d = {
          data: barChartData.data,
          categories: category,
        };
      }
    });
    // multilinechart2d
    this.chartApiService.getMultiLineChart2D().subscribe((response) => {
      const lineChartData = response?.data[0]?.attributes;
      const category = lineChartData?.categories.split(',');
      if (lineChartData.data.length) {
        this.multiLineChart3d = {
          data: lineChartData.data,
          categories: category,
        };
      }
    });

    // lineBarChart
    this.chartApiService.getLineBarChart().subscribe((response) => {
      const lineData = response?.data[0]?.attributes;
      const category = lineData?.categories.split(',');
      this.lineBarChart = {
        title: lineData.title,
        subtitle: lineData.subtitle,
        categories: category,
        remainingOptions: {
          series: lineData.series,
        },
      };
    });

    // stackedColumn
    this.chartApiService.getStackedColumnData().subscribe((response) => {
      const stackedSeries = response?.data[0]?.attributes;
      const category = stackedSeries.categories.split(',');
      this.stackedColumn = {
        title: stackedSeries.title,
        categories: category,
        remainingOptions: {
          series: stackedSeries.series,
        },
      };
    });

    // pieChart3d
    this.chartApiService.getPieChart3D().subscribe((response) => {
      const data1 = response?.data[0].attributes.data.data;
      if (data1.length) {
        this.pieChart3d = {
          data: data1,
        };
      }
    });
  }
}
