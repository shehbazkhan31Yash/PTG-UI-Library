import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ThemeGeneratorComponent } from './theme-generator.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

export default {
  title: 'Component/ThemeGeneratorComponent',
  component: ThemeGeneratorComponent,
  decorators: [
    moduleMetadata({
      imports: [ReactiveFormsModule, MatDialogModule],
    }),
  ],
} as Meta<ThemeGeneratorComponent>;

const Template: Story<ThemeGeneratorComponent> = (args: ThemeGeneratorComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};