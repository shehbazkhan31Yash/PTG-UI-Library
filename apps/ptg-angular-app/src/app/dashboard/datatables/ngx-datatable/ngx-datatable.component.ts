import { Component, OnInit } from '@angular/core';
import { SelectionType } from '@swimlane/ngx-datatable';
import { resources } from "../../../../resource/resource";
import { mocksService } from '@ptg-angular-app/common/data-services/mocks.service';
 
@Component({
  selector: 'ptg-ui-ngx-datatable',
  templateUrl: './ngx-datatable.component.html',
  styleUrls: ['./ngx-datatable.component.scss']
})
export class NgxDatatableComponent implements OnInit {
  constructor(private mocksApiService: mocksService,) { }
  ngxdata: any
  isLoaded = true;
  columns: any;
  offset: number = 0;
  rowClass: string = '';
  SelectionType = SelectionType;
  temp: any[] = [];
  resources = resources;
 
  ngxDatatableHtmlCode = `
    <ptg-ui-ptg-ngx-datatable
      [rows]="tableData"
      [columns]="columns"
      [limit]="10"
      (getFilterEvent)="updateFilter($event)"
      [offset]="offset"
      (getSelectionEvent) ="onSelect($event)"
      [hScroll]="true"
      (getActionEvent)="getAction($event)"
      [showActionButton]="true"
      >
    </ptg-ui-ptg-ngx-datatable>
  `;
 
  ngxDatatableTsCode = `
  import { Component } from '@angular/core';
 
  @Component({
    selector: 'ngx-datatable-component',
    templateUrl: './ngx-datatable-component.html'
  })
  export class NgxDatatableComponent {
    // Data required for the Ngx Datatable
    tableData: [{
        "id":1,
        "athlete": "Michael Phelps",
        "age": 23,
        "country": "United States",
        "year": 2008,
        "date": "24/08/2008",
        "sport": "Swimming",
        "gold": 8,
        "silver": 0,
        "total": 8
      },
      {
        "id":11,
        "athlete": "Michael Phelps",
        "age": 19,
        "country": "United States",
        "year": 2004,
        "date": "29/08/2004",
        "sport": "Swimming",
        "gold": 6,
        "silver": 2,
        "total": 8
      },
    ],
 
    ngOnInit() {
      this.columnData = [
			{ name: "Athlete", field: "athlete", frozenLeft: true},
			{ name: "Age",field: "age",filtering: true },
			{ name: "Country" ,field: "country",filtering: false},
			{ name: "Year",field: "year",filtering: false },
			{ name: "Date",field: "date" ,filtering: false},
			{ name: "Sport",field: "sport" ,filtering: false},
			{ name: "Gold",field: "gold" ,filtering: false},
			{ name: "Silver",field: "silver" ,filtering: false},
			{ name: "Total",field: "total" ,filtering: false},
		  ]
    }
 
 
    onSelect(event: any){
      // console.log(event);
    }
 
    getAction(event:any){
      // console.log(event);
    }
  }`;
 
  ngOnInit(): void {
    this.temp = this.ngxdata;
    this.columns = [
      { name: "Athlete", field: "athlete", frozenLeft: true },
      { name: "Age", field: "age", filtering: true },
      { name: "Country", field: "country", filtering: false },
      { name: "Year", field: "year", filtering: false },
      { name: "Date", field: "date", filtering: false },
      { name: "Sport", field: "sport", filtering: false },
      { name: "Gold", field: "gold", filtering: false },
      { name: "Silver", field: "silver", filtering: false },
      { name: "Total", field: "total", filtering: false },
    ];
    this.mocksApiService.getTableList().subscribe((response) => {
      this.ngxdata = response?.data[0].attributes.grid;
      this.temp = [...this.ngxdata];
    });
  }
 
  // Filter functions
  updateFilter(event: any) {

    const val = event.target.value.toLowerCase();
 
    // filter our data
    const temp = this.temp.filter(function (d: any) {
      return d.athlete.toLowerCase().indexOf(val) !== -1 || !val;
    });
 
    // update the rows
    this.ngxdata = temp;
    // Whenever the filter changes, always go back to the first page
    this.offset = 0;
  }
 
  onSelect(event: any) {
    // console.log(event);
  }
 
  getAction(event: any) {
    // console.log(event);
  }
}
 