import { TestBed } from '@angular/core/testing';

import { ClaimApplicationService } from './claim-application.service';

describe('ClaimApplicationService', () => {
  let service: ClaimApplicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClaimApplicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
