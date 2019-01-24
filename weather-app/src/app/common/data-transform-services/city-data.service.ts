import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { SuccessCitySearchRetrieve } from '../../app-store/citylist-reducer/citylist.actions';
import { CityListServerAdapterService } from '../adapter-services/city-list-server-adapter.service';
import { CityList } from '../../interfaces/city-list-interface';

@Injectable({
  providedIn: 'root'
})
export class CitySearchDataService {

  constructor(private CityListServerAdapter: CityListServerAdapterService,
              private store: Store<{}>) { }

  searchForCityByQuery(searchQury: string): void {
    this.CityListServerAdapter.retrieveSearchCity(searchQury)
      .subscribe((cityList: CityList) => {
        this.store.dispatch(new SuccessCitySearchRetrieve(
          cityList.map(eachVal => `${eachVal.city}, ${eachVal.state}, ${eachVal.country}`)));
      });
  }
}
