import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { WeatherAdapterService } from '../../common/adapter-services/weather-adapter.service';
import { CitySearchDataService } from '../../common/data-transform-services/city-data.service';
import { WeatherDataProviderService } from '../../common/data-transform-services/weather-data-provider.service';
import { MatAutocompleteSelectedEvent } from '@angular/material';
import { getCitiesFromState } from '../../app-store/citylist-reducer/citylist.selectors';
import { CityListState } from '../../interfaces/store.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit {

  value: String = '';
  searchTimeOut: any;
  searchInputControl: FormControl = new FormControl();
  options$: Observable<any>;

  constructor(private store: Store<CityListState>,
              private citySearchData: CitySearchDataService,
              private weatherDataProvider: WeatherDataProviderService) { }

  ngOnInit() {
    this.options$ = this.store.select<any>(getCitiesFromState);
  }

  citySelected($event: MatAutocompleteSelectedEvent): void {
    this.value = $event.option.value;
  }

  clearSelectedValue(): void {
    this.value = '';
  }

  search() { 
    this.weatherDataProvider.getWeather(this.value.split(',')[0]);
    this.searchInputControl.setValue('');
  }

  searchInputLocation(): void {
    if (this.searchTimeOut) {
      clearTimeout(this.searchTimeOut);
    }
    this.searchTimeOut = setTimeout(() => this.citySearchData.searchForCityByQuery(this.searchInputControl.value), 500);
  }
}
