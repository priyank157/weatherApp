import { TestBed } from '@angular/core/testing';

import { WeatherAdapterService } from './weather-adapter.service';

describe('WeatherAdapterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WeatherAdapterService = TestBed.get(WeatherAdapterService);
    expect(service).toBeTruthy();
  });
});
