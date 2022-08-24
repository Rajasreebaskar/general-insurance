import { TestBed } from '@angular/core/testing';

import { TravelpaymentService } from './travelpayment.service';

describe('TravelpaymentService', () => {
  let service: TravelpaymentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TravelpaymentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
