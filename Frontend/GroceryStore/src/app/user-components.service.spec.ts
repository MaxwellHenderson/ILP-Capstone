import { TestBed } from '@angular/core/testing';

import { UserComponentsService } from './user-components.service';

describe('UserComponentsService', () => {
  let service: UserComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
