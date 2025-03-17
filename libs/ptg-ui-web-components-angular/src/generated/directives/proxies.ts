/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';

import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from '@ptg-ui/ptg-ui-web-components';


@ProxyCmp({
  inputs: ['first', 'last', 'middle']
})
@Component({
  selector: 'my-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['first', 'last', 'middle'],
})
export class MyComponent {
  protected el: HTMLMyComponentElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MyComponent extends Components.MyComponent {}


@ProxyCmp({
  inputs: ['bgColor', 'defaultOpened', 'description', 'label']
})
@Component({
  selector: 'ptg-accordion',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['bgColor', 'defaultOpened', 'description', 'label'],
})
export class PtgAccordion {
  protected el: HTMLPtgAccordionElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface PtgAccordion extends Components.PtgAccordion {}


@ProxyCmp({
  inputs: ['appreanced', 'buttoncss', 'texed']
})
@Component({
  selector: 'ptg-alert',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['appreanced', 'buttoncss', 'texed'],
})
export class PtgAlert {
  protected el: HTMLPtgAlertElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface PtgAlert extends Components.PtgAlert {}


@ProxyCmp({
  inputs: ['datalist']
})
@Component({
  selector: 'ptg-breadcrumbs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['datalist'],
})
export class PtgBreadcrumbs {
  protected el: HTMLPtgBreadcrumbsElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface PtgBreadcrumbs extends Components.PtgBreadcrumbs {}


@ProxyCmp({
  inputs: ['appearance', 'btnIconAlignment', 'text']
})
@Component({
  selector: 'ptg-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['appearance', 'btnIconAlignment', 'text'],
})
export class PtgButton {
  protected el: HTMLPtgButtonElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface PtgButton extends Components.PtgButton {}


@ProxyCmp({
  inputs: ['callback', 'dayNames', 'monthNames', 'showFillDays', 'startDate']
})
@Component({
  selector: 'ptg-calender',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['callback', 'dayNames', 'monthNames', 'showFillDays', 'startDate'],
})
export class PtgCalender {
  protected el: HTMLPtgCalenderElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['dayChanged', 'monthChanged']);
  }
}


export declare interface PtgCalender extends Components.PtgCalender {

  dayChanged: EventEmitter<CustomEvent<any>>;

  monthChanged: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['cardButtonText', 'cardContent', 'cardContentLength', 'cardId', 'cardTitle', 'isCardAction', 'src']
})
@Component({
  selector: 'ptg-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['cardButtonText', 'cardContent', 'cardContentLength', 'cardId', 'cardTitle', 'isCardAction', 'src'],
})
export class PtgCard {
  protected el: HTMLPtgCardElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['handleClick']);
  }
}


export declare interface PtgCard extends Components.PtgCard {

  handleClick: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['callback', 'checked', 'color', 'dataid', 'datavalue', 'disabled', 'indeterminate', 'label']
})
@Component({
  selector: 'ptg-checkbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['callback', 'checked', 'color', 'dataid', 'datavalue', 'disabled', 'indeterminate', 'label'],
})
export class PtgCheckbox {
  protected el: HTMLPtgCheckboxElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChanged']);
  }
}


export declare interface PtgCheckbox extends Components.PtgCheckbox {

  valueChanged: EventEmitter<CustomEvent<string>>;
}


@ProxyCmp({
  inputs: ['footer']
})
@Component({
  selector: 'ptg-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['footer'],
})
export class PtgFooter {
  protected el: HTMLPtgFooterElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface PtgFooter extends Components.PtgFooter {}


@ProxyCmp({
  inputs: ['header']
})
@Component({
  selector: 'ptg-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['header'],
})
export class PtgHeader {
  protected el: HTMLPtgHeaderElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface PtgHeader extends Components.PtgHeader {}


@ProxyCmp({
  inputs: ['inputId', 'label', 'name', 'placeholder', 'type', 'value', 'width']
})
@Component({
  selector: 'ptg-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['inputId', 'label', 'name', 'placeholder', 'type', 'value', 'width'],
})
export class PtgInput {
  protected el: HTMLPtgInputElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChanged']);
  }
}


export declare interface PtgInput extends Components.PtgInput {
  /**
   * Event emmiter to handle changes
   */
  valueChanged: EventEmitter<CustomEvent<string>>;
}


@ProxyCmp({
  inputs: ['btnName', 'cancelBtn', 'closeOutsideClick', 'confirmButtonName', 'isOpen', 'modalHeaderName', 'modalSize', 'primaryBtn', 'showFooter', 'showHeader']
})
@Component({
  selector: 'ptg-modal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['btnName', 'cancelBtn', 'closeOutsideClick', 'confirmButtonName', 'isOpen', 'modalHeaderName', 'modalSize', 'primaryBtn', 'showFooter', 'showHeader'],
})
export class PtgModal {
  protected el: HTMLPtgModalElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['modalClose', 'confirmClose']);
  }
}


export declare interface PtgModal extends Components.PtgModal {

  modalClose: EventEmitter<CustomEvent<boolean>>;

  confirmClose: EventEmitter<CustomEvent<boolean>>;
}


@ProxyCmp({
  inputs: ['itemCount', 'page', 'pageSize', 'pageSizeOptions']
})
@Component({
  selector: 'ptg-pagination',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['itemCount', 'page', 'pageSize', 'pageSizeOptions'],
})
export class PtgPagination {
  protected el: HTMLPtgPaginationElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['pageChanged', 'sizeChanged']);
  }
}


export declare interface PtgPagination extends Components.PtgPagination {

  pageChanged: EventEmitter<CustomEvent<any>>;

  sizeChanged: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['ids', 'name', 'sender', 'type', 'value']
})
@Component({
  selector: 'ptg-radiobtn',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ids', 'name', 'sender', 'type', 'value'],
})
export class PtgRadiobtn {
  protected el: HTMLPtgRadiobtnElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface PtgRadiobtn extends Components.PtgRadiobtn {}


@ProxyCmp({
  inputs: ['ids', 'name', 'sender', 'type', 'value']
})
@Component({
  selector: 'ptg-radiobuton',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ids', 'name', 'sender', 'type', 'value'],
})
export class PtgRadiobuton {
  protected el: HTMLPtgRadiobutonElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface PtgRadiobuton extends Components.PtgRadiobuton {}


@ProxyCmp({
  inputs: ['multiSelect', 'selectData']
})
@Component({
  selector: 'ptg-select',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['multiSelect', 'selectData'],
})
export class PtgSelect {
  protected el: HTMLPtgSelectElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface PtgSelect extends Components.PtgSelect {}


@ProxyCmp({
  inputs: ['text', 'url']
})
@Component({
  selector: 'ptg-sidenav',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['text', 'url'],
})
export class PtgSidenav {
  protected el: HTMLPtgSidenavElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface PtgSidenav extends Components.PtgSidenav {}


@ProxyCmp({
  inputs: ['appearance']
})
@Component({
  selector: 'ptg-spinner',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['appearance'],
})
export class PtgSpinner {
  protected el: HTMLPtgSpinnerElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface PtgSpinner extends Components.PtgSpinner {}


@ProxyCmp({
  inputs: ['customClass', 'pageSizeOptions', 'searchable', 'sortable', 'tableHover', 'tableStrip', 'tablecolumn', 'tabledata', 'tabletitle', 'themeColor']
})
@Component({
  selector: 'ptg-table',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['customClass', 'pageSizeOptions', 'searchable', 'sortable', 'tableHover', 'tableStrip', 'tablecolumn', 'tabledata', 'tabletitle', 'themeColor'],
})
export class PtgTable {
  protected el: HTMLPtgTableElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface PtgTable extends Components.PtgTable {}


@ProxyCmp({
  inputs: ['appearance', 'autofocus', 'cols', 'disable', 'form', 'maxlen', 'minlength', 'name', 'placeholder', 'readonly', 'required', 'rows', 'value']
})
@Component({
  selector: 'ptg-textarea',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['appearance', 'autofocus', 'cols', 'disable', 'form', 'maxlen', 'minlength', 'name', 'placeholder', 'readonly', 'required', 'rows', 'value'],
})
export class PtgTextarea {
  protected el: HTMLPtgTextareaElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface PtgTextarea extends Components.PtgTextarea {}


@ProxyCmp({
  inputs: ['appearance', 'discription', 'id1', 'open', 'type']
})
@Component({
  selector: 'ptg-toast',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['appearance', 'discription', 'id1', 'open', 'type'],
})
export class PtgToast {
  protected el: HTMLPtgToastElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface PtgToast extends Components.PtgToast {}


@ProxyCmp({
  inputs: ['images', 'imgHeight', 'imgWidth', 'showIndicators']
})
@Component({
  selector: 'ptg-ui-carousel',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['images', 'imgHeight', 'imgWidth', 'showIndicators'],
})
export class PtgUiCarousel {
  protected el: HTMLPtgUiCarouselElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface PtgUiCarousel extends Components.PtgUiCarousel {}


