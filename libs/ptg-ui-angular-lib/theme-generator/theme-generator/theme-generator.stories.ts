import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { ThemeGeneratorComponent } from './theme-generator.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

const meta: Meta<ThemeGeneratorComponent> = {
  title: 'Component/ThemeGeneratorComponent',
  component: ThemeGeneratorComponent,
  decorators: [
    moduleMetadata({
      imports: [ReactiveFormsModule, MatDialogModule],
    }),
  ],
};

export default meta;
type Story = StoryObj<ThemeGeneratorComponent>;

export const Primary: Story = {
  args: {
  },
};
