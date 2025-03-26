import { Meta, Story ,moduleMetadata} from '@storybook/angular';
import { MatThemeGeneratorComponent } from './mat-theme-generator.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

export default {
  title: 'Components/MatThemeGenerator',
  component: MatThemeGeneratorComponent,
  decorators: [
    moduleMetadata({
      imports: [ReactiveFormsModule, MatDialogModule],
    }),
  ],
} as Meta;

const Template: Story<MatThemeGeneratorComponent> = (args: MatThemeGeneratorComponent) => ({
  component: MatThemeGeneratorComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
};