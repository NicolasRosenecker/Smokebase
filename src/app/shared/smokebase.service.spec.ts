import { TestBed } from '@angular/core/testing';

import { SmokebaseService } from './smokebase.service';

describe('SmokebaseService', () => {
  let service: SmokebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SmokebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
