import { TestBed } from '@angular/core/testing';

import { LandingPageComponentService } from './landing-page-component.service';

describe('LandingPageComponentService', () => {
  let service: LandingPageComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LandingPageComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
