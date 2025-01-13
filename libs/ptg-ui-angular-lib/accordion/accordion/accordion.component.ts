/**
 * @since May 2022
 * @author Aakash Patidar
 * @Component ptg-ui-Accordion;
 * @description This component for Accordion;
**/

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ptg-ui-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {
  @Input() listData: any;
  @Input() isAnimated: boolean = false;
  @Input() oneAtATime: boolean = false;
  @Input() addAccordionGroup: boolean = true;
  @Output() onChange: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    console.log(this.listData,"listData")
  }


  // onAccordion change state 
  change(event:any){
      this.onChange.emit(event);
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
    
    return [`ptg-ui-Accordion`, `ptg-ui-Accordion--${this.isAnimated}`, animatedmode  , oneAtTimemode,addAccordionGroupMode];
  
 
 
  }

  
}
