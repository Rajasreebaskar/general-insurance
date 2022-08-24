import { TestBed } from '@angular/core/testing';

import { TravelpolicynumberService } from './travelpolicynumber.service';

describe('TravelpolicynumberService', () => {
  let service: TravelpolicynumberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TravelpolicynumberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
