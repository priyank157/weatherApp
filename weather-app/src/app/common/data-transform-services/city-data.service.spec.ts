import { TestBed } from '@angular/core/testing';

import { CitySearchDataService } from './city-data.service';

describe('CitySearchDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CitySearchDataService = TestBed.get(CitySearchDataService);
    expect(service).toBeTruthy();
  });
});
