import { TestBed } from '@angular/core/testing';

import { VechicleInsuranceService } from './vechicle-insurance.service';

describe('VechicleInsuranceService', () => {
  let service: VechicleInsuranceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VechicleInsuranceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
