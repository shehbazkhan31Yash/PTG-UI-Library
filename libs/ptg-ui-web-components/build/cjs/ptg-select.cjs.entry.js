'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b272a2a2.js');

const ptgSelectCss = ":host{display:block}#optionValue{width:300px;border:1px solid grey;height:30px;border-radius:5px}#multiSelect{height:200px;width:300px}.multiselect{width:300px}.multiselect ul{list-style:none;border:1px solid gray;padding:0px;margin-top:1px;border-radius:4px}.multiselect ul li{padding:5px 5px 5px 0px}.multiselect ul li+li{border-top:1px gray solid}.selectBox{position:relative;padding:7px;border:1px solid gray;display:flex;align-items:center;font-size:14px;border-radius:4px}.selectBox select{width:100%;width:300px;border:1px solid grey;height:30px;border-radius:5px}.overSelect{line-height:1}#checkboxes{display:none;border:1px #dadada solid}#checkboxes label{display:block}#checkboxes label:hover{background-color:#1e90ff}";

const PtgSelect = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.showCheckboxes = () => {
      this.expanded = !this.expanded;
    };
    this.selectData = undefined;
    this.multiSelect = false;
    this.expanded = false;
  }
  render() {
    return (index.h("div", null, !this.multiSelect && (index.h("select", { id: "optionValue" }, index.h("option", { selected: true }, "select"), this.selectData.map((option) => {
      return index.h("option", { value: option.caption }, option.caption);
    }))), this.multiSelect && (index.h("div", { class: "multiselect" }, index.h("div", { class: "selectBox", onClick: () => this.showCheckboxes() }, index.h("div", { class: "overSelect" }, "Select")), this.expanded && (index.h("ul", null, index.h("li", null, index.h("label", { htmlfor: "one" }, index.h("input", { type: "checkbox", id: "one" }), "First checkbox")), index.h("li", null, index.h("label", { htmlfor: "two" }, index.h("input", { type: "checkbox", id: "two" }), "Second checkbox")), index.h("li", null, index.h("label", { htmlfor: "three" }, index.h("input", { type: "checkbox", id: "three" }), "Third checkbox"))))))));
  }
};
PtgSelect.style = ptgSelectCss;

exports.ptg_select = PtgSelect;
