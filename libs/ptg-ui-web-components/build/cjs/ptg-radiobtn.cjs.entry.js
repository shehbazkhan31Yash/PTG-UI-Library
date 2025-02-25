'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b272a2a2.js');

const ptgRadiobtnCss = "input[type=radio]{transform:scale(1.5);margin-left:14px}label{font-size:20px}";

const PtgRadiobtn = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.name = undefined;
    this.value = undefined;
    this.ids = undefined;
    this.sender = undefined;
    this.type = undefined;
  }
  render() {
    return (index.h("div", null, index.h("label", null, index.h("input", { type: this.type, id: this.ids, name: this.name, value: this.value }, " "), " ", this.sender)));
  }
};
PtgRadiobtn.style = ptgRadiobtnCss;

exports.ptg_radiobtn = PtgRadiobtn;
