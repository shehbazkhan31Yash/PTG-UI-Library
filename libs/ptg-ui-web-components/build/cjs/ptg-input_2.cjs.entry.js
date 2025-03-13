'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b272a2a2.js');

const ptgInputCss = ":host{display:block}input{padding:12px 20px;margin:8px 10px;display:inline-block;border-radius:10px;box-sizing:border-box}";

const PtgInput = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.valueChanged = index.createEvent(this, "valueChanged", 7);
    this.type = undefined;
    this.inputId = undefined;
    this.label = undefined;
    this.placeholder = '';
    this.name = undefined;
    this.value = '';
    this.width = '100%';
  }
  changeHandler(event) {
    this.value = event.target.value;
    this.valueChanged.emit(this.value);
  }
  render() {
    return (index.h("div", null, index.h("label", { htmlFor: this.inputId }, this.label), index.h("input", { type: this.type, id: this.inputId, name: this.name, placeholder: this.placeholder, onInput: this.changeHandler.bind(this) })));
  }
};
PtgInput.style = ptgInputCss;

const ptgPaginationCss = ".sc-ptg-pagination-h{display:block;border:1px solid #eee;padding:4px}.sc-ptg-pagination-h>div.sc-ptg-pagination{display:flex;justify-content:space-between;align-items:center}.sc-ptg-pagination-h .pages.sc-ptg-pagination{margin-right:auto}.sc-ptg-pagination-h .pages.sc-ptg-pagination,.sc-ptg-pagination-h .pages.sc-ptg-pagination a.sc-ptg-pagination{border-radius:2px}.sc-ptg-pagination-h .counts.sc-ptg-pagination{margin-right:18px}.sc-ptg-pagination-h .size.sc-ptg-pagination{margin-right:4px}.sc-ptg-pagination-h a.sc-ptg-pagination{cursor:pointer;text-decoration:none;display:inline-block;padding:2px 8px;border:1px solid #fafafa;margin-right:4px;transition:all 0.1s linear;user-select:none}.sc-ptg-pagination-h a.sc-ptg-pagination:hover{border-color:#aaa}.sc-ptg-pagination-h a.active.sc-ptg-pagination{color:#00f;border-color:#00f}.sc-ptg-pagination-h a.disabled.sc-ptg-pagination{cursor:default;color:#bbb}.sc-ptg-pagination-h a.disabled.sc-ptg-pagination:hover{border-color:#fafafa}";

const PtgPagination = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.pageChanged = index.createEvent(this, "pageChanged", 7);
    this.sizeChanged = index.createEvent(this, "sizeChanged", 7);
    this.pageCount = 0;
    this.page = 0;
    this.pageSize = 10;
    this.pageSizeOptions = [];
    this.itemCount = undefined;
  }
  handlePrevious(event) {
    if (this.page !== 0) {
      this.handleSelect(event, this.page - 1);
    }
  }
  handleNext(event) {
    if (this.page !== this.pageCount - 1) {
      this.handleSelect(event, this.page + 1);
    }
  }
  handleSelect(event, index) {
    event.preventDefault();
    this.pageChanged.emit(index);
  }
  handlePageSizeChange(event) {
    this.sizeChanged.emit(Number(event.currentTarget.value));
  }
  render() {
    if (this.itemCount) {
      let pages = [];
      const start = this.page * this.pageSize + 1;
      const end = this.page * this.pageSize + this.pageSize;
      for (let i = 0; i < this.itemCount / this.pageSize; i++) {
        pages.push(i);
      }
      this.pageCount = pages.length;
      return (index.h("div", null, index.h("span", { class: "pages" }, index.h("span", null, index.h("a", { class: this.page === 0 ? 'disabled' : '', onClick: (event) => this.handlePrevious(event) }, "Previous")), index.h("span", null, pages.map((index$1) => (index.h("a", { class: this.page === index$1 ? 'active' : '', onClick: (event) => this.handleSelect(event, index$1) }, index$1 + 1)))), index.h("span", null, index.h("a", { class: this.page === pages.length - 1 ? 'disabled' : '', onClick: (event) => this.handleNext(event) }, "Next"))), index.h("span", { class: "counts" }, start, " -", ' ', this.page === pages[pages.length - 1] ? this.itemCount : end, " of", ' ', this.itemCount), this.pageSizeOptions.length ? (index.h("span", { class: "size" }, index.h("select", { onChange: (event) => this.handlePageSizeChange(event) }, this.pageSizeOptions.map((n) => (index.h("option", null, n)))), ' ', "per page")) : (index.h("span", null))));
    }
  }
};
PtgPagination.style = ptgPaginationCss;

exports.ptg_input = PtgInput;
exports.ptg_pagination = PtgPagination;
