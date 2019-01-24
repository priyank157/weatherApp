import { TestBed } from '@angular/core/testing';

import { CityListServerAdapterService } from './city-list-server-adapter.service';

describe('CityListServerAdapterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CityListServerAdapterService = TestBed.get(CityListServerAdapterService);
    expect(service).toBeTruthy();
  });
});
