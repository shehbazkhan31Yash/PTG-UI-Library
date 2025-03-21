import { TestBed } from '@angular/core/testing';

import { MatThemeService } from './mat-theme.service';

describe('MatThemeService', () => {
  let service: MatThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
