'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b272a2a2.js');

const ptgTableCss = ".ptg-table-wrapper .ptg-table{width:100%;table-layout:fixed;border-spacing:0;border-collapse:collapse}.ptg-table-wrapper .ptg-table tr th,.ptg-table-wrapper .ptg-table tr td{padding:8px 18px;border-top:1px solid rgba(0, 0, 0, 0.125);text-align:left}.ptg-table-wrapper .ptg-table thead tr{background:#f8f9fa}.ptg-table-wrapper .ptg-table thead tr th{font-weight:600;padding:12px 18px;text-align:left}.ptg-table-wrapper .ptg-table-strip.ptg-table-primary tr:nth-child(even){background:rgba(0, 123, 255, 0.4)}.ptg-table-wrapper .ptg-table-strip.ptg-table-secondary tr:nth-child(even){background:rgba(108, 117, 125, 0.4)}.ptg-table-wrapper .ptg-table-strip.ptg-table-warning tr:nth-child(even){background:rgba(255, 193, 7, 0.4)}.ptg-table-wrapper .ptg-table-strip.ptg-table-danger tr:nth-child(even){background:rgba(220, 53, 69, 0.4)}.ptg-table-wrapper .ptg-table-strip.ptg-table-success tr:nth-child(even){background:rgba(40, 167, 69, 0.4)}.ptg-table-wrapper .ptg-table-strip.ptg-table-danger tr:nth-child(even){background:rgba(220, 53, 69, 0.4)}.ptg-table-wrapper .ptg-table-strip tr:nth-child(even){background:#f9fafb}.ptg-table-wrapper .ptg-table-primary thead tr{background:rgba(0, 123, 255, 0.4)}.ptg-table-wrapper .ptg-table-primary tbody tr{background:rgba(0, 123, 255, 0.3)}.ptg-table-wrapper .ptg-table-secondary thead tr{background:rgba(108, 117, 125, 0.4)}.ptg-table-wrapper .ptg-table-secondary tbody tr{background:rgba(108, 117, 125, 0.3)}.ptg-table-wrapper .ptg-table-warning thead tr{background:rgba(255, 193, 7, 0.4)}.ptg-table-wrapper .ptg-table-warning tbody tr{background:rgba(255, 193, 7, 0.3)}.ptg-table-wrapper .ptg-table-danger thead tr{background:rgba(220, 53, 69, 0.4)}.ptg-table-wrapper .ptg-table-danger tbody tr{background:rgba(220, 53, 69, 0.3)}.ptg-table-wrapper .ptg-table-success thead tr{background:rgba(40, 167, 69, 0.4)}.ptg-table-wrapper .ptg-table-success tbody tr{background:rgba(40, 167, 69, 0.3)}.table-search{margin-bottom:20px}.no-record-found{text-align:center !important}.sorting{position:relative}.sorting:before,.sorting:after{border:4px solid transparent;content:\"\";display:block;height:0;right:5px;top:50%;position:absolute;width:0}.sorting:before{border-bottom-color:#666;margin-top:-9px;opacity:1}.sorting:after{border-top-color:#666;margin-top:1px;opacity:0.5}.sorting.accending:after{opacity:1}.sorting.accending:before{opacity:0.5}";

const PtgTable = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.page = 0;
    this.items = undefined;
    this.itemCount = 0;
    this.pageSize = 10;
    this.pageSizeOptions = [];
    this.tabledata = undefined;
    this.sortable = false;
    this.tablecolumn = undefined;
    this.customClass = undefined;
    this.tableHover = undefined;
    this.tableStrip = undefined;
    this.tabletitle = undefined;
    this.themeColor = undefined;
    this.searchable = false;
    this.tablelist = undefined;
    this.activeSortColumn = undefined;
    this.isSort = false;
    this.searchvalue = '';
  }
  tablesort(value) {
    if (this.sortable) {
      if (this.isSort) {
        return (this.tablelist = this.tabledata.sort((a, b) => {
          if (a[value] < b[value])
            return -1;
          if (a[value] > b[value])
            return 1;
          return 0;
        }));
      }
      else {
        return (this.tablelist = this.tabledata.sort((a, b) => {
          if (a[value] < b[value])
            return 1;
          if (a[value] > b[value])
            return -1;
          return 0;
        }));
      }
    }
  }
  handleSelected(event) {
    this.page = event.detail;
    const start = this.page * this.pageSize;
    const end = this.page * this.pageSize + this.pageSize;
    this.tablelist = this.tabledata.slice(start, end);
  }
  handleSizeChanged(event) {
    this.page = 0;
    this.pageSize = event.detail;
    const start = this.page * this.pageSize;
    const end = this.page * this.pageSize + this.pageSize;
    this.tablelist = this.tabledata.slice(start, end);
  }
  tableOrder(val) {
    this.isSort = !this.isSort;
    this.activeSortColumn = val;
    this.tablesort(val.toLowerCase());
  }
  watchSearch() {
    const start = this.page * this.pageSize;
    const end = this.page * this.pageSize + this.pageSize;
    const keyword = this.searchvalue.toString().toLowerCase();
    if (keyword !== '') {
      const results = this.tabledata.filter((user) => {
        return Object.keys(user).some((key) => user[key].toString().toLowerCase().includes(keyword));
        // Use the toLowerCase() method to make it case-insensitive
      });
      this.tablelist = results.slice(start, end);
    }
    else {
      this.tablelist = this.tabledata.slice(start, end);
      // If the text field is empty, show all users
    }
  }
  updateTableData() {
    this.tablelist = this.tabledata;
    const start = this.page * this.pageSize;
    const end = this.page * this.pageSize + this.pageSize;
    this.tablelist = this.tabledata.slice(start, end);
  }
  getinputValue(val) {
    this.searchvalue = val.detail;
  }
  componentDidLoad() {
    this.itemCount = this.tabledata.length;
    const start = this.page * this.pageSize;
    const end = this.page * this.pageSize + this.pageSize;
    this.tablelist = this.tabledata.slice(start, end);
  }
  render() {
    var _a, _b, _c;
    return (index.h("div", { class: "ptg-table-wrapper" }, this.searchable && (index.h("div", { class: "table-search" }, index.h("ptg-input", { placeholder: "Records.." }))), index.h("table", { class: {
        'ptg-table': true,
        [`ptg-table-${this.themeColor}`]: !!this.themeColor,
        'ptg-table-strip': !!this.tableStrip,
        'ptg-table-hover': !!this.tableHover,
        [this.customClass]: !!this.customClass,
      } }, index.h("thead", null, index.h("tr", null, (_a = this.tablecolumn) === null || _a === void 0 ? void 0 : _a.map((column) => {
      return (index.h("th", { class: {
          sorting: !!this.sortable,
          accending: this.activeSortColumn === (column === null || column === void 0 ? void 0 : column.header)
            ? !!this.isSort
              ? true
              : false
            : false,
        }, onClick: () => {
          this.tableOrder(column === null || column === void 0 ? void 0 : column.header);
        } }, column === null || column === void 0 ? void 0 : column.header));
    }))), index.h("tbody", null, ((_b = this.tablelist) === null || _b === void 0 ? void 0 : _b.length) < 1 && (index.h("tr", null, index.h("td", { colSpan: this.tablecolumn.length, class: "no-record-found" }, index.h("strong", null, "No data Found")))), (_c = this.tablelist) === null || _c === void 0 ? void 0 :
      _c.map((tableItem) => {
        return (index.h("tr", null, this === null || this === void 0 ? void 0 : this.tablecolumn.map((column) => {
          return index.h("td", null, tableItem[column === null || column === void 0 ? void 0 : column.key]);
        })));
      }))), index.h("ptg-pagination", { page: this.page, pageSize: this.pageSize, pageSizeOptions: [10, 15, 20], itemCount: this.itemCount })));
  }
  static get watchers() { return {
    "searchvalue": ["watchSearch"],
    "tabledata": ["updateTableData"]
  }; }
};
PtgTable.style = ptgTableCss;

exports.ptg_table = PtgTable;
