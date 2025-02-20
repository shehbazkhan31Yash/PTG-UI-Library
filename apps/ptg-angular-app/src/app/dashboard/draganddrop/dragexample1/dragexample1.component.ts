
/**
 * @since March 2022
 * @author Bhanu Prakash Sharma
 * @Component ptg-ui-dragexample1;
 * @description This component for drag and drop example fot table Row drag and drop
 **/

import { Component} from '@angular/core';
interface Item { name: string;
  value: number;
}

@Component({
  selector: 'ptg-ui-dragexample1',
  templateUrl: './dragexample1.component.html',
  styleUrls: ['./dragexample1.component.scss'],
})
export class Dragexample1Component {

  items: Item[] = [
    { name: 'Item 1', value: 1 },
    { name: 'Item 2', value: 2 },
    { name: 'Item 3', value: 3 },
    { name: 'Item 4', value: 4 },
  ];

  dragIndex: number | null = null;

  onDragStart(index: number) {
    this.dragIndex = index;
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  onDrop(index: number) {
    if (this.dragIndex !== null) {
      const draggedItem = this.items[this.dragIndex];
      this.items.splice(this.dragIndex, 1);
      this.items.splice(index, 0, draggedItem);
      this.dragIndex = null;
    }
  }

}
  