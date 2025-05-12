import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { MatThemeGeneratorComponent } from './mat-theme-generator.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { MatThemeService } from './mat-theme-services/mat-theme.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

const meta: Meta<MatThemeGeneratorComponent> = {
  title: 'Component/MatThemeGenerator',
  component: MatThemeGeneratorComponent,
  decorators: [
    moduleMetadata({
      imports: [
        ReactiveFormsModule,
        MatDialogModule,
        HttpClientModule
      ],
      providers: [
        MatThemeService,
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({}), 
            queryParams: of({}), 
            snapshot: {
              paramMap: {
                get: () => null
              }
            }
          }
        }
      ],
    }),
  ],
};

export default meta;
type Story = StoryObj<MatThemeGeneratorComponent>;

export const Primary: Story = {
  args: {},
};
