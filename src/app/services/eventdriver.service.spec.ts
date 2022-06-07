import { TestBed } from '@angular/core/testing';

import { EventdriverService } from './eventdriver.service';

describe('EventdriverService', () => {
  let service: EventdriverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventdriverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
