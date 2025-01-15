import { Component } from '@angular/core';
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
  label = 'Bacon Ipsum';
  description = 'Bacon ipsum dolor amet pork chop sausage turkey spare ribs ham hock cupim pork loin capicola bacon ham filet mignon prosciutto boudin turducken. Shank corned beef burgdoggen jowl ribeye. Ham pork pastrami rump meatball buffalo venison andouille picanha fatback pork loin. Venison doner porchetta, chicken leberkas fatback burgdoggen ham andouille landjaeger alcatra. Pork belly pork jerky prosciutto leberkas tail salami tongue frankfurter turducken short loin flank.';
  bgColor = 'white';
  defaultOpened = false;

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
  isLoaded = true;

  ngOnInit(): void {
    this.accordionData = [
      { title: 'Static Header', description: 'Accordion Content Area', isOpen: true, panelClass: 'panel-primary' },
      { title: 'Header 1', description: 'Content Description', isDisabled: true, panelClass: 'panel-success' },
      { title: 'Header 2', description: 'Content Description', isDisabled: false, isOpen: false },
      { title: 'Header 3', description: 'Content Description', isDisabled: true, isOpen: false, panelClass: 'panel-warning' },
      { title: 'Header 4', description: 'Content Description', isDisabled: false, isOpen: false, panelClass: 'panel-danger' }
    ];
  }
}
