import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';
import { StepperComponent } from './stepper.component';
import { ReactiveFormsModule } from '@angular/forms';

const meta: Meta<StepperComponent> = {
  title: 'Component/StepperComponent',
  component: StepperComponent,
  decorators: [
    moduleMetadata({
      imports: [ReactiveFormsModule],
    }),
  ],
};

export default meta;
type Story = StoryObj<StepperComponent>;

export const Primary: Story = {
  args: {
    formGroups: [],
    steps: ['Account Info', 'Personal Information', 'Payment Details'],
  },
};

export const Orientation: Story = {
  args: {
    formGroups: [],
    steps: ['Account Info', 'Personal Information', 'Payment Details'],
    orientation: 'vertical',
  },
};