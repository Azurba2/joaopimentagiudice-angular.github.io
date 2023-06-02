import { TestBed } from '@angular/core/testing';

import { DarkThemeServiceService } from './dark-theme-service.service';

describe('DarkThemeServiceService', () => {
  let service: DarkThemeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DarkThemeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
