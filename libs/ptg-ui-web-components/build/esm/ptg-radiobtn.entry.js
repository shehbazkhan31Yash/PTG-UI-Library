import { r as registerInstance, h } from './index-e0983af0.js';

const ptgRadiobtnCss = "input[type=radio]{transform:scale(1.5);margin-left:14px}label{font-size:20px}";

const PtgRadiobtn = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.name = undefined;
    this.value = undefined;
    this.ids = undefined;
    this.sender = undefined;
    this.type = undefined;
  }
  render() {
    return (h("div", null, h("label", null, h("input", { type: this.type, id: this.ids, name: this.name, value: this.value }, " "), " ", this.sender)));
  }
};
PtgRadiobtn.style = ptgRadiobtnCss;

export { PtgRadiobtn as ptg_radiobtn };
