/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * @since March 2022
 * @author Priyanka Jain
 * @Component ptg-ui-grid;
 * @description This component for grid
 **/

import { AfterContentInit, Component, ContentChildren, Input, QueryList, TemplateRef } from '@angular/core';

interface Grid {
  col?: number;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  offsetXs?: number;
  offsetSm?: number;
  offsetMd?: number;
  offsetLg?: number;
  offsetXl?: number;
}

@Component({
  selector: 'ptg-ui-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements AfterContentInit {
  @Input() columnClasses: Grid[] = [];
  @Input() columnClass = '';
  @Input() rowClass = '';
  @ContentChildren(TemplateRef) templates!: QueryList<TemplateRef<any>>;

  columns: { class: string, template: TemplateRef<any> }[] = [];

  ngAfterContentInit(): void {
    this.columns = this.templates.toArray().map((template, index) => ({
      class: this.generateClass(this.columnClasses[index]) || 'col',
      template
    }));
  }

  generateClass(obj: Grid): string {
    let gridClass = '';
    const gridKeys: (keyof Grid)[] = ['col', 'xs', 'sm', 'md', 'lg', 'xl'];
    const offsetGridKeys: (keyof Grid)[] = ['offsetXs','offsetSm', 'offsetMd', 'offsetLg', 'offsetLg'];
    gridKeys.forEach(key => {
      if (key in obj) {
        gridClass += (key == 'col') ? `col-${obj[key]} ` : `col-${key}-${obj[key]} `;
      }
    });
    offsetGridKeys.forEach(key => {
      if (key in obj) {
        gridClass += `offset-${key.slice(6).toLowerCase()}-${obj[key]} `;
      }
    });
    return gridClass;
  }
}

