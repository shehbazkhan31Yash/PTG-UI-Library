import { Component, Prop, h, State, Watch, Listen } from '@stencil/core';

export interface tableInterface {
  id?: number;
  name?: string;
  username?: string;
  email?: any;
  tabledata?: any;
}
@Component({
  tag: 'ptg-table',
  styleUrl: 'ptg-table.scss',
  shadow: true,
})
export class PtgTable implements tableInterface {
  page: number = 0;

  @State() items: any[];
  @State() itemCount = 0;
  @State() pageSize: number = 10;
  @Prop() pageSizeOptions: number[] = [];

  @Prop() tabledata: any;
  @Prop() sortable: boolean = false;
  @Prop() tablecolumn: any;
  @Prop() customClass?: string;
  @Prop() tableHover?: boolean;
  @Prop() tableStrip?: boolean;
  @Prop() tabletitle: string;
  @Prop() themeColor?: string;
  @Prop() searchable: boolean = false;
  @State() tablelist: any;
  @State() activeSortColumn: string;

  @State() isSort: boolean = false;
  @State() searchvalue: string = '';

  tablesort(value: string) {
    if (this.sortable) {
      if (this.isSort) {
        return (this.tablelist = this.tabledata.sort((a, b) => {
          if (a[value] < b[value]) return -1;
          if (a[value] > b[value]) return 1;
          return 0;
        }));
      } else {
        return (this.tablelist = this.tabledata.sort((a, b) => {
          if (a[value] < b[value]) return 1;
          if (a[value] > b[value]) return -1;
          return 0;
        }));
      }
    }
  }

  @Listen('pageChanged')
  handleSelected(event: CustomEvent) {
    this.page = event.detail;
    const start = this.page * this.pageSize;
    const end = this.page * this.pageSize + this.pageSize;
    this.tablelist = this.tabledata.slice(start, end);
  }

  @Listen('sizeChanged')
  handleSizeChanged(event: CustomEvent) {
    this.page = 0;
    this.pageSize = event.detail;
    const start = this.page * this.pageSize;
    const end = this.page * this.pageSize + this.pageSize;
    this.tablelist = this.tabledata.slice(start, end);
  }

  tableOrder(val: string) {
    this.isSort = !this.isSort;
    this.activeSortColumn = val;
    this.tablesort(val.toLowerCase());
  }
  @Watch('searchvalue')
  watchSearch() {
    const start = this.page * this.pageSize;
    const end = this.page * this.pageSize + this.pageSize;
    const keyword = this.searchvalue.toString().toLowerCase();
    if (keyword !== '') {
      const results = this.tabledata.filter((user) => {
        return Object.keys(user).some((key) =>
          user[key].toString().toLowerCase().includes(keyword)
        );
        // Use the toLowerCase() method to make it case-insensitive
      });
      this.tablelist = results.slice(start, end);
    } else {
      this.tablelist = this.tabledata.slice(start, end);
      // If the text field is empty, show all users
    }
  }
  @Watch('tabledata')
  updateTableData() {
    this.tablelist = this.tabledata;
    const start = this.page * this.pageSize;
    const end = this.page * this.pageSize + this.pageSize;
    this.tablelist = this.tabledata.slice(start, end);
  }
  @Listen('valueChanged')
  getinputValue(val: any) {
    this.searchvalue = val.detail;
  }
  componentDidLoad() {
    this.itemCount = this.tabledata.length;
    const start = this.page * this.pageSize;
    const end = this.page * this.pageSize + this.pageSize;
    this.tablelist = this.tabledata.slice(start, end);
  }

  render() {
    return (
      <div class="ptg-table-wrapper">
        {this.searchable && (
          <div class="table-search">
            <ptg-input placeholder="Records.."></ptg-input>
          </div>
        )}
        <table
          class={{
            'ptg-table': true,
            [`ptg-table-${this.themeColor}`]: !!this.themeColor,
            'ptg-table-strip': !!this.tableStrip,
            'ptg-table-hover': !!this.tableHover,
            [this.customClass]: !!this.customClass,
          }}
        >
          <thead>
            <tr>
              {this.tablecolumn?.map((column) => {
                return (
                  <th
                    class={{
                      sorting: !!this.sortable,
                      accending:
                        this.activeSortColumn === column?.header
                          ? !!this.isSort
                            ? true
                            : false
                          : false,
                    }}
                    onClick={() => {
                      this.tableOrder(column?.header);
                    }}
                  >
                    {column?.header}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {this.tablelist?.length < 1 && (
              <tr>
                <td colSpan={this.tablecolumn.length} class="no-record-found">
                  <strong>No data Found</strong>
                </td>
              </tr>
            )}
            {this.tablelist?.map((tableItem) => {
              return (
                <tr>
                  {this?.tablecolumn.map((column) => {
                    return <td>{tableItem[column?.key]}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        <ptg-pagination
          page={this.page}
          pageSize={this.pageSize}
          pageSizeOptions={[10, 15, 20]}
          itemCount={this.itemCount}
        ></ptg-pagination>
      </div>
    );
  }
}
