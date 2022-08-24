import { TestBed } from '@angular/core/testing';

import { VehiclePremiumCalculatorService } from './vehicle-premium-calculator.service';

describe('VehiclePremiumCalculatorService', () => {
  let service: VehiclePremiumCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VehiclePremiumCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
