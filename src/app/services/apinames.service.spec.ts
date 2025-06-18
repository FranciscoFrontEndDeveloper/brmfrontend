import { TestBed } from '@angular/core/testing';

import { ApinamesService } from './apinames.service';

describe('ApinamesService', () => {
  let service: ApinamesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApinamesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
