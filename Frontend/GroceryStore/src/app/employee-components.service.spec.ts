import { TestBed } from '@angular/core/testing';

import { EmployeeComponentsService } from './employee-components.service';

describe('EmployeeComponentsService', () => {
  let service: EmployeeComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
