/**
 * @since May 2022
 * @author Aakash Patidar
 * @Component ptg-ui-Accordion;
 * @description This component for Accordion;
**/

import { Component, EventEmitter, Input, Output } from '@angular/core';
interface AccordionItem {
  isDisabled?: boolean;
  title: string;
  isOpen?: boolean;
  panelClass?: string;
  description: string;
}
@Component({
  selector: 'ptg-ui-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent {
  @Input() listData: AccordionItem[] = [];
  @Input() isAnimated?: boolean;
  @Input() oneAtATime?: boolean;
  @Input() addAccordionGroup?: boolean = true;
  @Output() handleChange: EventEmitter<any> = new EventEmitter();

  // onAccordion change state 
  change(event: any) {
    this.handleChange.emit(event);
  }

  public get classes(): string[] {

    const animatedmode = this.isAnimated
      ? 'ptg-ui-Accordion--isAnimated'
      : 'ptg-ui-Accordion--secondary';

    const oneAtTimemode = this.oneAtATime
      ? 'ptg-ui-Accordion--oneAtATime'
      : 'ptg-ui-Accordion--secondary';

    const addAccordionGroupMode = this.addAccordionGroup
      ? 'ptg-ui-Accordion--addAccordionGroup'
      : 'ptg-ui-Accordion--secondary';

    return [`ptg-ui-Accordion`, `ptg-ui-Accordion--${this.isAnimated}`, animatedmode, oneAtTimemode, addAccordionGroupMode];



  }


}
