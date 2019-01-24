import { TestBed } from '@angular/core/testing';

import { WeatherDataProviderService } from './weather-data-provider.service';

describe('WeatherDataProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WeatherDataProviderService = TestBed.get(WeatherDataProviderService);
    expect(service).toBeTruthy();
  });
});
