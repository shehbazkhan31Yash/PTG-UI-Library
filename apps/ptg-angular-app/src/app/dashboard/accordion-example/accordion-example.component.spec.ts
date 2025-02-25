import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';
import { AccordionComponent } from '@ptg-ui/libs/ptg-angular/src/lib/ptg-ui/accordion/accordion/accordion.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';

import { AccordionExampleComponent } from './accordion-example.component';

describe('AccordionExampleComponent', () => {
  let component: AccordionExampleComponent;
  let fixture: ComponentFixture<AccordionExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[TranslateModule.forRoot(), AccordionModule.forRoot(), BrowserAnimationsModule],
      declarations: [ AccordionExampleComponent, AccordionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
