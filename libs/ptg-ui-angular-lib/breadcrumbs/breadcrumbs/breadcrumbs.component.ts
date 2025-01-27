/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * @since March 2022
 * @author Priyanka Jain
 * @Component ptg-ui-breadcrumbs;
 * @description This component for breadcrumbs
 **/

import {
  Component,
  Input,
  OnInit
} from '@angular/core';

interface Breadcrumb {
  name: string;
  url?: string;
  child?: Breadcrumb;
}

@Component({
  selector: 'ptg-ui-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
})
export class BreadcrumbsComponent implements OnInit {
  @Input() data: Breadcrumb;
  @Input() dividers?: string = '/';
  breadcrumbs: Breadcrumb[] = [];
  
  ngOnInit(): void {
    this.generateBreadcrumbs(this.data);
  }
  generateBreadcrumbs(data: any): void {
    if (!data || !data.name) {
      this.breadcrumbs = [{ name: 'Invalid object' }];
      return;
    }
    const breadcrumbs: Breadcrumb[] = [];
    let current: Breadcrumb | undefined = data;
    while (current) {
      breadcrumbs.push({ name: current.name, url: current.url });
      current = current.child;
    }
    this.breadcrumbs = breadcrumbs;
  }
}
