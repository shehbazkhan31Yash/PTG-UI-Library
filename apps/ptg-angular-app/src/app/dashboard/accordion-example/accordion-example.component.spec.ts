import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccordionExampleComponent } from './accordion-example.component';
import { ACCORDION_DATA } from './accordion';

describe('AccordionExampleComponent', () => {
  let component: AccordionExampleComponent;
  let fixture: ComponentFixture<AccordionExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccordionExampleComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct initial HTML code', () => {
    const expectedHtmlCode = `
  <ptg-ui-accordion [listData]="data" ></ptg-ui-accordion>`;
    expect(component.htmlCode.trim()).toBe(expectedHtmlCode.trim());
  });

  it('should have correct initial TypeScript code', () => {
    const expectedTsCode = `
    import { Component } from '@angular/core';
    @Component({
      selector: 'ptg-ui-accordion-example',
      templateUrl: './accordion-example.component.html',
      styleUrls: ['./accordion-example.component.scss']
    })
    export class DemoAccordionComponent {
      data =Open: true, customClass: 'panel-primary' },
    { title: 'Header 1', description: 'Content Description', isDisabled: true, customClass: 'panel-success' },
    { title: 'Header 2', description: 'Content Description', isDisabled: false, isOpen: false },
    { title: 'Header 3', description: 'Content Description', isDisabled: true, isOpen: false, customClass: 'panel-warning' },
    { title: 'Header 4', description: 'Content Description', isDisabled: false, isOpen: false, customClass: 'panel-danger' }
  ];
  onAccordionChange(event: any) {
    console.log('Accordion changed:', event);
  }
    }`;
    expect(component.tsCode.trim()).toBe(expectedTsCode.trim());
  });

  it('should initialize accordionItems with ACCORDION_DATA', () => {
    expect(component.accordionItems).toEqual(ACCORDION_DATA);
  });

  it('should log event on accordion change', () => {
    spyOn(console, 'log');
    const event = { index: 0, isOpen: true };
    component.onAccordionChange(event);
    expect(console.log).toHaveBeenCalledWith('Accordion changed:', event);
  });
});