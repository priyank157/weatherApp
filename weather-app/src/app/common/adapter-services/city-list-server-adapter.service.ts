import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { InitCitySearchRetrieve } from '../../app-store/citylist-reducer/citylist.actions';
import { CityListRersponse } from '../../interfaces/city-list-interface';

@Injectable({
  providedIn: 'root'
})

export class CityListServerAdapterService {

  BASE_URL: String = 'http://localhost:3000/';

  constructor(private http: HttpClient, private store: Store<{}>) { }

  retrieveSearchCity(citySearchQuery: string): Observable<Array<object>> {
    const url = `${this.BASE_URL}searchForCity?&cityName=${citySearchQuery}`;

    this.store.dispatch(new InitCitySearchRetrieve());
    return new Observable((subscriber) => {
      this.http.get(url).subscribe((response: CityListRersponse) => subscriber.next(response.data));
    });
  }
}
