import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'ptg-ui-button-example',
    templateUrl: './button-example.component.html',
   styleUrls: ['./button-example.component.scss'],
})
export class ButtonExampleComponent {

      htmlCode = `
      <ptg-ui-button type="button" [isDisable]="false" [isBlock]="false" accessKey="" label="Primary Button"></ptg-ui-button>
      `;
    
      tsCode = `import { ButtonModule } from '@ptg-ui/angular/button';`;

 }

