/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * @since March 2022
 * @author Priyanka Jain
 * @Component ptg-ui-grid;
 * @description This component for grid
 **/

import {
  Component,
  Input
} from '@angular/core';

interface Grid {
  col?: number;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}
@Component({
  selector: 'ptg-ui-grid-column',
  templateUrl: './grid.component.html'
})

export class GridColumnComponent {
  @Input() gridData: Grid = {};
  gridClass = '';
  ngOnInit() {
    const gridKeys: (keyof Grid)[] = ['col', 'xs', 'sm', 'md', 'lg', 'xl'];
    gridKeys.forEach(key => {
      if (key in this.gridData) {
        this.gridClass += ` col-${key}-${this.gridData[key]} `;
      }
    });
  }
}

// Grid Row component
@Component({
  selector: 'ptg-ui-grid-row',
  template: `
    <div class="row">
        <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./grid.component.scss']
})
export class GridRowComponent { }

