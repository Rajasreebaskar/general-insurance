import { TestBed } from '@angular/core/testing';

import { TraveldetailsService } from './traveldetails.service';

describe('TraveldetailsService', () => {
  let service: TraveldetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TraveldetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
