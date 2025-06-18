import { TestBed } from '@angular/core/testing';

import { ApidetailsService } from './apidetails.service';

describe('ApidetailsService', () => {
  let service: ApidetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApidetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
