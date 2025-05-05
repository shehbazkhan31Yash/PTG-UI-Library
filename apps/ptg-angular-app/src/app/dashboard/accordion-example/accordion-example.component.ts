import { Component } from '@angular/core';
import { ACCORDION_DATA } from './accordion';
interface AccordionItem {
  isDisabled?: boolean;
  title: string;
  isOpen?: boolean;
  customClass?: string;
  description: string;
}
@Component({
  selector: 'ptg-ui-accordion-example',
  templateUrl: './accordion-example.component.html',
  styleUrls: ['./accordion-example.component.scss'],
})
export class AccordionExampleComponent {
  htmlCode = `
  <ptg-ui-accordion [listData]="data" ></ptg-ui-accordion>`;

  tsCode = `
    import { Component } from '@angular/core';
    @Component({
      selector: 'ptg-ui-accordion-example',
      templateUrl: './accordion-example.component.html',
      styleUrls: ['./accordion-example.component.scss']
    })
    export class DemoAccordionComponent {
      data = [
    { title: 'Static Header', description: 'Accordion Content Area', isOpen: true, customClass: 'panel-primary' },
    { title: 'Header 1', description: 'Content Description', isDisabled: true, customClass: 'panel-success' },
    { title: 'Header 2', description: 'Content Description', isDisabled: false, isOpen: false },
    { title: 'Header 3', description: 'Content Description', isDisabled: true, isOpen: false, customClass: 'panel-warning' },
    { title: 'Header 4', description: 'Content Description', isDisabled: false, isOpen: false, customClass: 'panel-danger' }
  ];
  onAccordionChange(event: any) {
  }
    }`;

  accordionItems: AccordionItem[] = ACCORDION_DATA;
  
  onAccordionChange(event: any) {
  }
}
