import { TestBed } from '@angular/core/testing';

import { ChorusDataService } from './chorus-data.service';

describe('ChorusDataService', () => {
  let service: ChorusDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChorusDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
