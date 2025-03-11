import { r as registerInstance, c as createEvent, h } from './index-e0983af0.js';

const ptgInputCss = ":host{display:block}input{padding:12px 20px;margin:8px 10px;display:inline-block;border-radius:10px;box-sizing:border-box}";

const PtgInput = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.valueChanged = createEvent(this, "valueChanged", 7);
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
    return (h("div", null, h("label", { htmlFor: this.inputId }, this.label), h("input", { type: this.type, id: this.inputId, name: this.name, placeholder: this.placeholder, onInput: this.changeHandler.bind(this) })));
  }
};
PtgInput.style = ptgInputCss;

const ptgPaginationCss = ".sc-ptg-pagination-h{display:block;border:1px solid #eee;padding:4px}.sc-ptg-pagination-h>div.sc-ptg-pagination{display:flex;justify-content:space-between;align-items:center}.sc-ptg-pagination-h .pages.sc-ptg-pagination{margin-right:auto}.sc-ptg-pagination-h .pages.sc-ptg-pagination,.sc-ptg-pagination-h .pages.sc-ptg-pagination a.sc-ptg-pagination{border-radius:2px}.sc-ptg-pagination-h .counts.sc-ptg-pagination{margin-right:18px}.sc-ptg-pagination-h .size.sc-ptg-pagination{margin-right:4px}.sc-ptg-pagination-h a.sc-ptg-pagination{cursor:pointer;text-decoration:none;display:inline-block;padding:2px 8px;border:1px solid #fafafa;margin-right:4px;transition:all 0.1s linear;user-select:none}.sc-ptg-pagination-h a.sc-ptg-pagination:hover{border-color:#aaa}.sc-ptg-pagination-h a.active.sc-ptg-pagination{color:#00f;border-color:#00f}.sc-ptg-pagination-h a.disabled.sc-ptg-pagination{cursor:default;color:#bbb}.sc-ptg-pagination-h a.disabled.sc-ptg-pagination:hover{border-color:#fafafa}";

const PtgPagination = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.pageChanged = createEvent(this, "pageChanged", 7);
    this.sizeChanged = createEvent(this, "sizeChanged", 7);
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
      return (h("div", null, h("span", { class: "pages" }, h("span", null, h("a", { class: this.page === 0 ? 'disabled' : '', onClick: (event) => this.handlePrevious(event) }, "Previous")), h("span", null, pages.map((index) => (h("a", { class: this.page === index ? 'active' : '', onClick: (event) => this.handleSelect(event, index) }, index + 1)))), h("span", null, h("a", { class: this.page === pages.length - 1 ? 'disabled' : '', onClick: (event) => this.handleNext(event) }, "Next"))), h("span", { class: "counts" }, start, " -", ' ', this.page === pages[pages.length - 1] ? this.itemCount : end, " of", ' ', this.itemCount), this.pageSizeOptions.length ? (h("span", { class: "size" }, h("select", { onChange: (event) => this.handlePageSizeChange(event) }, this.pageSizeOptions.map((n) => (h("option", null, n)))), ' ', "per page")) : (h("span", null))));
    }
  }
};
PtgPagination.style = ptgPaginationCss;

export { PtgInput as ptg_input, PtgPagination as ptg_pagination };
