import { Component } from '@angular/core';

@Component({
  selector: 'ptg-ui-button-component',
  templateUrl: './button-example.component.html',
  styleUrls: ['./button-example.component.scss'],
})
export class ButtonExampleComponent {
 
  
  htmlCode = `
  <ptg-ui-button [isDisable]="true" [isBlock]="false" [size]="'extra-large'" [label]="'Disabled'"
            [btnStyleType]="'primary'"></ptg-ui-button>
  `;
  htmlCodeForDisable= `
  <ptg-ui-button [size]="'medium'" [label]="'Primary'" [btnStyleType]="'primary'"
            (buttonClick)="onButtonClick($event)"></ptg-ui-button>
  `;

  tsCode = `
    import { Component } from '@angular/core';

    @Component({
      selector: 'ptg-ui-button-component',
      templateUrl: './button-example.component.html',
      styleUrls: ['./button-example.component.scss']
    })
    export class CardExampleComponent {
    onButtonClick(event: Event) {
  }
  }`;

  onButtonClick(event: Event) {
    return null;
  }
}
