import { Injectable } from '@angular/core';
import { WeatherAdapterService } from '../adapter-services/weather-adapter.service';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class WeatherDataProviderService {

  weatherProvider$: Subject<object> = new Subject<object>();
  cities: Array<String> = [];
  weatherDataList: Array<Object> = [];

  constructor(private weatherAdapter: WeatherAdapterService) {
    const cities = JSON.parse(localStorage.getItem('cities'));
    if (cities) {
      this.cities = [...cities];
      this.refreshWeather();
    }
  }

  refreshWeather() {
    if (this.cities.length > 0) {
      this.cities.forEach((cityName) => {
        this.getWeatherOfCity(cityName.toString());
      });
    }
  }

  getWeather(cityName: string) {
    if (this.cities.find((city) => city === cityName)) {
      return;
    }
    this.getWeatherOfCity(cityName);
    this.cities.push(cityName);
    this.saveCityList([...this.cities]);
  }

  deleteWeatherDataOfCity(cityName: string) {
    this.weatherDataList = this.weatherDataList.filter((eachData) => eachData.cityName !== cityName);
    console.log(this.weatherDataList);
    this.weatherProvider$.next(this.weatherDataList);
    this.cities = this.cities.filter((city) => city !== cityName);
    this.saveCityList([...this.cities]);
  }

  saveCityList(cityList) {
    localStorage.setItem('cities', JSON.stringify(cityList));
  }

  getWeatherOfCity(cityName: string) {
    this.weatherAdapter.retrieveWeatherOfCity(cityName)
      .subscribe((weatherInfo) => {
        this.weatherDataList.push(weatherInfo);
        this.weatherProvider$.next(this.weatherDataList);
      });
  }
}
