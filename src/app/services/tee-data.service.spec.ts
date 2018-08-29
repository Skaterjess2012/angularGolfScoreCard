import { TestBed, inject } from '@angular/core/testing';

import { TeeDataService } from './tee-data.service';

describe('TeeDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeeDataService]
    });
  });

  it('should be created', inject([TeeDataService], (service: TeeDataService) => {
    expect(service).toBeTruthy();
  }));
});
