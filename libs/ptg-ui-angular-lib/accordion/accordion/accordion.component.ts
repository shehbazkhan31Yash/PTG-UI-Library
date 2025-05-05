import { Component, EventEmitter, Input, Output } from '@angular/core';

interface AccordionItem {
  isDisabled?: boolean;
  title: string;
  isOpen?: boolean;
  customClass?: string;
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
  @Output() handleChange: EventEmitter<{ index: number; isOpen: boolean }> = new EventEmitter();

  change(event: { index: number; isOpen: boolean }) {
    this.handleChange.emit(event);
  }

  toggleItem(index: number) {
    if (this.oneAtATime) {
      this.listData.forEach((item, i) => {
        if (i !== index) {
          item.isOpen = false;
        }
      });
    }
    this.listData[index].isOpen = !this.listData[index].isOpen;
    this.change({ index, isOpen: this.listData[index].isOpen });
  }

  get classes(): string[] {
    const animatedMode = this.isAnimated ? 'isAnimated' : '';
    const oneAtATimeMode = this.oneAtATime ? 'oneAtATime' : '';

    return ['accordion', animatedMode, oneAtATimeMode];
  }
}
