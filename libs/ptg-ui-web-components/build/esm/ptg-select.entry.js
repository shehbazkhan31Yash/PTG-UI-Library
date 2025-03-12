import { r as registerInstance, h } from './index-e0983af0.js';

const ptgSelectCss = ":host{display:block}#optionValue{width:300px;border:1px solid grey;height:30px;border-radius:5px}#multiSelect{height:200px;width:300px}.multiselect{width:300px}.multiselect ul{list-style:none;border:1px solid gray;padding:0px;margin-top:1px;border-radius:4px}.multiselect ul li{padding:5px 5px 5px 0px}.multiselect ul li+li{border-top:1px gray solid}.selectBox{position:relative;padding:7px;border:1px solid gray;display:flex;align-items:center;font-size:14px;border-radius:4px}.selectBox select{width:100%;width:300px;border:1px solid grey;height:30px;border-radius:5px}.overSelect{line-height:1}#checkboxes{display:none;border:1px #dadada solid}#checkboxes label{display:block}#checkboxes label:hover{background-color:#1e90ff}";

const PtgSelect = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.showCheckboxes = () => {
      this.expanded = !this.expanded;
    };
    this.selectData = undefined;
    this.multiSelect = false;
    this.expanded = false;
  }
  render() {
    return (h("div", null, !this.multiSelect && (h("select", { id: "optionValue" }, h("option", { selected: true }, "select"), this.selectData.map((option) => {
      return h("option", { value: option.caption }, option.caption);
    }))), this.multiSelect && (h("div", { class: "multiselect" }, h("div", { class: "selectBox", onClick: () => this.showCheckboxes() }, h("div", { class: "overSelect" }, "Select")), this.expanded && (h("ul", null, h("li", null, h("label", { htmlfor: "one" }, h("input", { type: "checkbox", id: "one" }), "First checkbox")), h("li", null, h("label", { htmlfor: "two" }, h("input", { type: "checkbox", id: "two" }), "Second checkbox")), h("li", null, h("label", { htmlfor: "three" }, h("input", { type: "checkbox", id: "three" }), "Third checkbox"))))))));
  }
};
PtgSelect.style = ptgSelectCss;

export { PtgSelect as ptg_select };
