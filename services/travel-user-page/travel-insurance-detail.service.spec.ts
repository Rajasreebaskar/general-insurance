import { TestBed } from '@angular/core/testing';

import { TravelInsuranceDetailService } from './travel-insurance-detail.service';

describe('TravelInsuranceDetailService', () => {
  let service: TravelInsuranceDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TravelInsuranceDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
