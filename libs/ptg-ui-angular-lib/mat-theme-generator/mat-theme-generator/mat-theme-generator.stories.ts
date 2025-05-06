import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { MatThemeGeneratorComponent } from './mat-theme-generator.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

const meta: Meta<MatThemeGeneratorComponent> = {
  title: 'Components/MatThemeGenerator',
  component: MatThemeGeneratorComponent,
  decorators: [
    moduleMetadata({
      imports: [ReactiveFormsModule, MatDialogModule],
    }),
  ],
};

export default meta;
type Story = StoryObj<MatThemeGeneratorComponent>;

export const Primary: Story = {
  args: {},
};
