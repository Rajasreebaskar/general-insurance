import { TestBed } from '@angular/core/testing';

import { TravelPremiumService } from './travel-premium.service';

describe('TravelPremiumService', () => {
  let service: TravelPremiumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TravelPremiumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
