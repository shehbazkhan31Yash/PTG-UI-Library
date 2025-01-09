import { Component } from '@angular/core';

@Component({
  selector: 'ptg-ui-breadcrumbs-component',
  templateUrl: './breadcrumbs-example.component.html',
  styleUrls: ['./breadcrumbs-example.component.scss'],
})
export class BreadcrumbsExampleComponent {
  data = {
    "name": "Home",
    "url": "home",
    "child": {
      "name": "Category",
      "url": "",
      "child": {
        "name": "Alert"
      }
    }
  };

  htmlCode = `
  <ptg-ui-breadcrumbs [data]="data"></ptg-ui-breadcrumbs>
  `;

  tsCode = `
  import { Component } from '@angular/core';
  @Component({
    selector: 'ptg-ui-breadcrumbs-component',
    templateUrl: './breadcrumbs-example.component.html',
    styleUrls: ['./breadcrumbs-example.component.scss'],
  })
  export class BreadcrumbsExampleComponent {
    data = {
    "name": "Home",
    "url" :"home",
    "child": {
      "name": "Category",
      "url" :"#",
      "child": {
        "name": "Alert"
      }
    }
  };

  }
  `;
}
