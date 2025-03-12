# Getting Started with ptg-angular

### Install the package

`npm install @ptg-ui/angular@latest`

If any dependencies issue came, please install this with force

`npm install @ptg-ui/angular@latest --force`

## Components available in this package

1.  **Input**

    **Import Input**

    `import { PtgUiInputModule } from '@ptg-ui/angular/input;`

    _Properties_
    **The " ? " represents here that this property is optional**

    * type = 'text';
    * placeholder?: string | undefined | null;
    * bindValue? : any;
    * className? : any;
    * id? : any;
    * value? : any;
    * accessKey? : any;
    * aria_placeholder? : any;
    * maxlength?: string | number | null;
    * minlength?: string | number | null;
    * inputValue?: any;
    ### USE
    >
        <ptg-ui-input [id]="'user_name'" class="w-100" formControlName='input'
            type="text" className="form-control bg_0" [placeholder]="'input'"
        </ptg-ui-input>

2.  **Textarea**

    **Import Textarea**

    `import { PtgUiTextareaModule } from '@ptg-ui/angular/textarea;`

    _Properties_
    **The " ? " represents here that this property is optional**

    * type = 'text';
    * placeholder?: string | undefined | null;
    * bindValue? : any;
    * className? : any;
    * id? : any;
    * value? : any;
    * accessKey? : any;
    * aria_placeholder? : any;
    * maxlength?: string | number | null;
    * minlength?: string | number | null;
    * textareaValue?: any;

    ### USE
    >
        <ptg-ui-textarea class="w-100" [id]="'textarea'" formControlName="textarea" className="form-control bg_0">
        </ptg-ui-textarea>

3.  **Select**

    **Import Select**  
     `import { PtgUiSelectModule } from '@ptg-ui/angular/select';`

    _Properties_  
     **The " ? " represents here that this property is optional.**

    * id?: string;
    * parentForm?: any;
    * fieldname?: string;
    * placeholder?: any;
    * items: any;
    * bindLabel?: string;
    * bindValue?: string;
    * isMultiple?: boolean;
    * closeOnSelect?: boolean;
    * accessKey? : any;
    * textLimit? = '10';
    * selectedValue?: any = [];

    ### USE
    >
        <ptg-ui-select formControlName='select' class="w-100" [items]='selectList'
            [isMultiple]="false" [closeOnSelect]="true"
            [placeholder]="'select'">
        </ptg-ui-select>

        For Multislect

        <ptg-ui-select formControlName='multiSelect' class="w-100" [id]="'multiSelect'" [items]='multiSelectList'
            [isMultiple]="true" [closeOnSelect]="false"
            [placeholder]="'multiselect placeholder'">
        </ptg-ui-select>

4.  **Radio Button**

    **Import radio button**  
     `import { PtgUiRadioModule } from '@ptg-ui/angular/radio';`  
     _Properties_  
     **The " ? " represents here that this property is optional.**

    * name : string;
    * id? = 'ptg-radio';
    * items: any;
    * accessKey? : any;
    * aria_label? : any;
    * selectedValue?: any;

    ### USE
    >
        <ptg-ui-radio formControlName='radio' [items]='radioList'
            [name]="'radio-btn'">
        </ptg-ui-radio>

5.  **Toasts**

    **Import Toasts**  
     `import { PtgUiToastsModule } from '@ptg-ui/angular/tosts';`  
     _Properties_  
     **The " ? " represents here that this property is optional.**

    ### USE
    >
        import { PTGToastsService } from '@ptg-ui/angular';
        @Component({...})
        export class YourComponent {
        constructor(private toastr: PTGToastsService) {}

        showToastr() {
                this.toastr.showSuccess('Successfully','Success!!!');
                this.toastr.showWarning('Warning','Warning!!!');
                this.toastr.showInfo('Info','Info!!!');
                this.toastr.showError('Error','Error!!!');
        }
            

6.  **Ag Grid**

    **Import Ag Grid**  
     `import { PtgUiAgGridModule } from '@ptg-ui/angular';`  
     _Properties_  
     **The " ? " represents here that this property is optional.**

    * gridOptions: GridOptions | any
    * rowData: any;
    * columnData: any;
    * themeClassName?: string = 'ag-theme-alpine';
    * sortable?: boolean;
    * editable?: boolean ;
    * rowHeight?: number;
    * rowDrag?: boolean ;
    * animateRow?: boolean;
    * rowStyle?: any;
    * rowClass?: string;
    * rowSelection?: string = 'multiple'
    * filter?: boolean;
    * filterParms?: any;
    * pagination?: boolean;
    * paginationLimit?: number;
    * customPaginationClass?: string;
    * enableCustomFilter?: boolean;
    * frameworkComponents?: any;

    ### USE
    >
        <ptg-ui-ptg-ag-grid-datatable 
            [rowData]="rowData" 
            [columnData]="columnData" 
            [sortable]="true" 
            [rowHeight]="48" 
            [rowDrag]="true"
            [animateRow]="true" 
            [filter]="true"
            [filterParms]="filterParms"
            (onFilterOpen)="onFilterOpend($event)"
            (onFilterChanged)="onFilterChanged($event)"
            (onFilterModified)="onFilterModified($event)"
            [pagination]="true"
            (onPaginationChanged)="paginate($event)"
            [paginationLimit]="10"
            [editable]="false"
            (onPaginationChanged)="paginate($event)"
            (onCellValueChanges)="onEditing($event)"
            (onNavigateToNext)="navigateToNext($event)"
            (onNavigateToPrevious)="navigateToPrevious($event)"
            (onNavigateToPage)="navigateToPage($event)"
            [customPaginationClass]="'custom-Pagination-Class'"
            [frameworkComponents]="frameworkComponents">
        </ptg-ui-ptg-ag-grid-datatable>

7.  **Ngx-datatable**

    **Import Ngx-datatable**  
     `import { PtgUiNgxdatatableModule } from '@ptg-ui/angular';`

    _Properties_  
     **The " ? " represents here that this property is optional.**

    * scrollbarV: boolean;
    * scrollbarH: boolean ;
    * headerHeight: number;
    * footerHeight: number;
    * rows: any;
    * columns: any;
    * rowHeight: any = 'auto';
    * vScroll: boolean;
    * hScroll: boolean;
    * loaderShowWhen: boolean ;
    * totalCount: number ;
    * offset: number;
    * limit: number ;
    * virtualization: boolean;
    * externalPaging: boolean ;
    * sorts: any;
    * externalSorting: boolean ;
    * rowClass: string;
    * showFiter: boolean;
    * SelectionType = SelectionType;
    * currentPage: number;
    * totalPage: number;
    * pageArray: any = [];
    * showActionButton:boolean;

     ### USE
    >
        <ptg-ui-ptg-ngx-datatable 
            [rows]="rows" 
            [columns]="columns" 
            [limit]="10" 
            (getFilterEvent)="updateFilter($event)" 
            [offset]="offset"
            (getSelectionEvent) ="onSelect($event)"
            [hScroll]="true"
            (getActionEvent)="getAction($event)"
            [showActionButton]="true">
        </ptg-ui-ptg-ngx-datatable>

8.  **File-Download**

    **Import file-download**  
     `import { PtgUiFileDownloadModule } from '@ptg-ui/angular';`

    _Properties_  
     **The " ? " represents here that this property is optional.**

    * fileTypeList?: any
    * tableData?: any;
    * fileType?: string;

    - Formats

    1. PDF
    2. EXCEL
    3. WORD
    4. PNG

    ### USE
    >
        <ptg-ui-file-download [tableData]="tableData"></ptg-ui-file-download>

9.  **Check-Box**

    **Import checkbox**  
     `import { PtgUiChecksModule } from '@ptg-ui/angular';`

    _Properties_  
     **The " ? " represents here that this property is optional.**

    * label?: string | undefined | null;
    * accessKey? : any;
    * isChecked? = false;

    ### USE
    >
        <ptg-ui-checks formControlName='checkbox'
            [label]="check box text'">
        </ptg-ui-checks>

10. **Calender**

    **Import Calender**  
     `import { PtgUiCalenderModule } from '@ptg-ui/angular';`

    _Properties_  
     **The " ? " represents here that this property is optional.**

    * placeholder?: string;
    * className?: string;
    * id?: string;
    * minDate?: Date;
    * maxDate?: Date;
    * disabled? = false;
    * accessKey? : any;
    * inputDate?: any;

    ### USE
    >
        <ptg-ui-calendar class="w-100" aria-label="calender" [id]="'calender'"
            formControlName='calender' aria_placeholder="MM-DD-YYYY">
        </ptg-ui-calendar>

11. **Alerts**

    **Import Alert**  
     `import { PtgUiAlertModule } from '@ptg-ui/angular';`

    _Properties_  
     **The " ? " represents here that this property is optional.**

    * type?: string;
    * message?: string;
    * isDismissible?: boolean;

    ### USE
    >
        <ptg-ui-alert *ngIf="errorMessage" [type]="'danger'" [message]="errorMessage" [isDismissible]="true"
            (closeAlert)="closeAlert($event)">
        </ptg-ui-alert>

12. **Buttons**

    **Import Button**  
     `import { PtgUiButtonModule } from '@ptg-ui/angular';`

    _Properties_  
     **The " ? " represents here that this property is optional.**

    * type:any = 'button';
    * btnStyleType:any;
    * isDisable? = false;
    * isBlock? = false;
    * accessKey?:any;

    ### USE
    >
        <ptg-ui-button btnStyleType="primary" type="button" class="custom-class">Button</ptg-ui-button>


13. **Interminate Checkbox**

    **Import Interminate Checkbox**  
     `import { PtgUiInterminateCheckboxesModule } from '@ptg-ui/angular';`

    _Properties_  
     **The " ? " represents here that this property is optional.**

    * dropdownEnabled = true;
    * values: number[] = [];
    * checkBoxList: any = [];

    ### USE
    >
        <ptg-ui-indeterminate-checkboxes [checkBoxList]="checkBoxData" (onCheckboxValueChanges)="onChanges($event)"></ptg-ui-indeterminate-checkboxes>

14. **Sidebar**

    **Import Sidebar**  
     `import { SidenavModule } from '@ptg-ui/angular';`

    _Properties_  
     **The " ? " represents here that this property is optional.**

    * menuItems: any = [];
    * isMenuOpen: boolean;
    * selectedPath = '';

    ### USE
    >
        <ptg-ui-sidenav [selectedPath]="selectedPath" [isMenuOpen]="isMenuOpen" [menuItems]="menuItems" (select)="($event)">
        </ptg-ui-sidenav>

15. **Loading**

    **Import Loading**  
     `import { PtgUiLoadingModule } from '@ptg-ui/angular';`

    _Properties_  
     **The " ? " represents here that this property is optional.**

    * loading = false;

    ### USE
    >
         <ptg-ui-loading [loading]="loading"></ptg-ui-loading>

16. **Mat-Datatable**

    **Import Mat-Datatable**  
     `import { PtgUiMatDatatableModule } from '@ptg-ui/angular';`

    _Properties_  
     **The " ? " represents here that this property is optional.**

    * data: any = [];
    * dataSource: any;
    * columns: any;
    * emptyStateMessage: string = 'No data matching the filter';
    * totalCount: number;
    * offset: number;
    * limit: number;
    * showFiter: boolean;

    ### USE
    >
        <ptg-ui-mat-datatable
            [data]="data"
            [columns]="dataColumns"
            [showFiter]="true"
            [totalCount]="20"
            [limit]="10"
            (paginationData)="paginate($event)">
        </ptg-ui-mat-datatable>

17. **Accordian**

    **Import Accordian**  
     `import { PtgUiAccordianModule } from '@ptg-ui/angular';`

    _Properties_  
     **The " ? " represents here that this property is optional.**

    * listData: any;
    * isAnimated: boolean;
    * isDisabled: boolean;
    * oneAtATime: boolean;

    ### USE
    >
        <ptg-ui-accordian [listData]="data" [isAnimated]="true" [oneAtATime]="true"></ptg-ui-accordian>

18. **Charts**

    - D3 Charts  
       **Import charts**  
       `import { PtgUiBarChartModule, PtgUiLineChartModule, PtgUiPieChartModule } from "@ptg-ui/angular";`

          1.  Bar chart
              _Properties_
               **The " ? " represents here that this property is optional.**
              **Data array must contain color property for its color in chart.**

              * data: any;
              * margin: any;
              * width: any;
              * height: any;
              * start: any;
              * end: any;
              * svg: any;

              > USE
              
                <ptg-ui-bar-chart [data]="barChartData.data" [width]="barChartData.width" [height]="barChartData.height"    [margin]="barChartData.margin" [start]="barChartData.start" [end]="barChartData.end">
                </ptg-ui-bar-chart>

          2.  Line chart
               _Properties_
               **The " ? " represents here that this property is optional.**

              * data: any;
              * margin: any;
              * width: any;
              * height: any;

              > USE

                <ptg-ui-pie-chart [data]="pieChartData.data" [colorsArray]="pieChartData.colors"></ptg-ui-pie-chart>

          3.  Pie chart
              _Properties_
               **The " ? " represents here that this property is optional.**
              * data: any;
              * svg: any;
              * margin: any;
              * width: any;
              * height: any;

              > USE

                <ptg-ui-line-chart [data]="lineChartData.data" [margin]="lineChartData.margin" [width]="lineChartData.width" [height]="lineChartData.height"></ptg-ui-line-chart>

    - HighCharts

      - 2D

        **Import charts**

        `import { PtgUiHighBarChartModule, PtgUiHighLineChartModule, PtgUiHighPieChartModule, PtgUiLinebarChartModule, PtgUiStackedColumnChartModule } from '@ptg-ui/angular';`

        1.  High-bar-chart
            _Properties_
            **The " ? " represents here that this property is optional.**

            * data: any = [];

            > USE
                
                <ptg-ui-high-bar-chart [data]="barChart3d.data"></ptg-ui-high-bar-chart>

        2.  High-line-chart
            _Properties_
            **The " ? " represents here that this property is optional.**

            * data: any = [];
            * categories?: any;
            * id? = 'line-chart';

            > USE
                
                <ptg-ui-high-line-chart [data]="lineChart3d.data" id="single-line" [categories]="lineChart3d.categories"></ptg-ui-high-line-chart>

        3.  High-pie-chart
            _Properties_
            **The " ? " represents here that this property is optional.**

            * data:any;

            > USE
                
                <ptg-ui-high-pie-chart [data]="pieChart3d.data"></ptg-ui-high-pie-chart>

        4.  Linebar chart
            _Properties_
            **The " ? " represents here that this property is optional.**

            * remainingOptions:any;
            * title?:any;
            * subtitle?:any;
            * categories?:any;

            > USE
                
                <ptg-ui-linebar-chart [remainingOptions]="lineBarChart.remainingOptions" [categories]="lineBarChart.categories" [title]="lineBarChart.title" [subtitle]="lineBarChart.subtitle"></ptg-ui-linebar-chart>

        5.  Stacked Column chart
            _Properties_
            **The " ? " represents here that this property is optional.**
            * remainingOptions:any;
            * title?:any;
            * subtitle?:any;
            * categories?:any;
            * yTitle?:any;

            > USE
                
                <ptg-ui-stacked-column-chart [remainingOptions]="stackedColumn.remainingOptions" [categories]="stackedColumn.categories" [title]="stackedColumn.title" [subtitle]="stackedColumn.subtitle"></ptg-ui-stacked-column-chart>

        - 3D

          **Import charts**
          `import { PtgUiHigh3dBarChartModule, PtgUiHigh3dLineChartModule, PtgUiHigh3dPieChartModule} from '@ptg-ui/angular';`

          1.  High-3d-bar-chart
              _Properties_
              **The " ? " represents here that this property is optional.**

              * data: any = [];
              * remainingOptions:any = {};
              * highcharts?:any;
              * title?:any = null;
              * categories?:any;
              * xTitle?:any = null;
              * yTitle?:any = null;

               > USE
                
                <ptg-ui-high-3d-bar-chart [data]="barChart3d.data" [categories]="barChart3d.categories"></ptg-ui-high-3d-bar-chart>


          2.  High-3d-line-chart

          _Properties_
          **The " ? " represents here that this property is optional.**

          * data: any = [];
          * remainingOptions:any = {};
          * highcharts?:any;
          * title?:any = null;
          * categories?:any;
          * xTitle?:any = null;
          * yTitle?:any = null;
          * id = 'chart-line-3d';

            > USE

                <ptg-ui-high-3d-line-chart [data]="lineChart3d.data" [categories]="lineChart3d.categories" id="single-line-chart"></ptg-ui-high-3d-line-chart>

          3. High-3d-pie-chart
             _Properties_
             **The " ? " represents here that this property is optional.**

          * data: any = [];
          * remainingOptions:any = {};
          * highcharts?:any;
          * title?:any = null;
          * categories?:any;
          * xTitle?:any = null;
          * yTitle?:any = null;
          * seriesName?:any = '';

          > USE
          
            <ptg-ui-high-3d-pie-chart [data]="pieChart3d.data"></ptg-ui-high-3d-pie-chart>

19. **Pipes**

    **Import Pipe**  
     `import { PtgUiTruncatePipeModule, PtgUiCapitalizePipeModule, PtgUiPhoneFormatPipeModule} from '@ptg-ui/angular';`

    1.  Truncate Pipe
        _Properties_
        **The " ? " represents here that this property is optional.**

        * {{value | truncate : '10'}}

    2.  Capitalized Pipe
        _Properties_
        **The " ? " represents here that this property is optional.**

        * {{value | capitalize}}

    3.  PhoneFormatPipe Pipe
        _Properties_
        **The " ? " represents here that this property is optional.**

        * {{value | phoneFormat}}
