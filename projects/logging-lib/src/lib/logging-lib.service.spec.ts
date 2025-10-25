import { TestBed } from '@angular/core/testing';

import { LoggingLibService } from './logging-lib.service';

describe('LoggingLibService', () => {
  let service: LoggingLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoggingLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
