import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { StepperComponent } from './stepper.component';
import { ReactiveFormsModule } from '@angular/forms';

export default {
  title: 'Component/StepperComponent',
  component: StepperComponent,

  decorators: [
    moduleMetadata({
      imports: [ReactiveFormsModule]
    })
  ]
} as Meta<StepperComponent>;
const Template: Story<StepperComponent> = (args: StepperComponent) => ({
  props: args
});

export const Primary = Template.bind({});
Primary.args = {
  formGroups: [],
  steps: ['Account Info', 'Personal Information', 'Payment Details']
};

export const Orientation = Template.bind({});
Orientation.args = {
  formGroups: [],
  steps: ['Account Info', 'Personal Information', 'Payment Details'],
  orientation: 'vertical'
};

