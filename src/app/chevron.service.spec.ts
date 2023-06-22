import { TestBed } from '@angular/core/testing';

import { ChevronService } from './chevron.service';

describe('ChevronService', () => {
  let service: ChevronService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChevronService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
