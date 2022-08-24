import { TestBed } from '@angular/core/testing';

import { TravelinsuranceService } from './travelinsurance.service';

describe('TravelinsuranceService', () => {
  let service: TravelinsuranceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TravelinsuranceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
