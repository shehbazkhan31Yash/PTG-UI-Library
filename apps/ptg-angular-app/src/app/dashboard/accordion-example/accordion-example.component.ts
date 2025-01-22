import { Component } from '@angular/core';
import { ACCORDION_DATA } from './accordion';
interface AccordionItem {
  isDisabled?: boolean;
  title: string;
  isOpen?: boolean;
  panelClass?: string;
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
        {title: 'Static Header', description: 'Accordion Content Area', isDisabled: true},
        {title: 'Header 1', description: 'Content Description',  isOpen: true }
      {title: 'Header 2', description: 'Content Description', panelClass:'panel-primary'}
      ]
    }`;

  accordionData: Array<AccordionItem> = [];

  ngOnInit(): void {
    this.accordionData = ACCORDION_DATA;
  }
}
