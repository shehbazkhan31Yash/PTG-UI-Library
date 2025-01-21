import { Component } from '@angular/core';

@Component({
  selector: 'ptg-ui-breadcrumbs-component',
  templateUrl: './breadcrumbs-example.component.html',
  styleUrls: ['./breadcrumbs-example.component.scss'],
})
export class BreadcrumbsExampleComponent {
  dataList: any = [
    { title: 'home', link: '#' },
    { title: 'about', link: '#' },
    { title: 'contact', link: '#' },
  ];
  htmlCode = `
  <ptg-breadcrumbs [datalist]="dataList"></ptg-breadcrumbs>
  `;

  tsCode = `
  import { Component } from '@angular/core';
  @Component({
    selector: 'ptg-ui-breadcrumbs-component',
    templateUrl: './breadcrumbs-example.component.html',
    styleUrls: ['./breadcrumbs-example.component.scss'],
  })
  export class BreadcrumbsExampleComponent {
    dataList: any = [
      { title: 'home', link: '/home' },
      { title: 'about', link: '/about' },
      { title: 'contact', link: '/contact' },
    ];
  }
  `;
}
