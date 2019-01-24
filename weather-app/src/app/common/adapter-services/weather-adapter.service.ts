import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherDataResponse } from '../../interfaces/weather-data-interface';

@Injectable({
  providedIn: 'root'
})

export class WeatherAdapterService {

  constructor(private http: HttpClient) { }

  retrieveWeatherOfCity(cityName: string) {
    // URL = `http://api.openweathermap.org/data/2.5/weather?q=${cityName.replace(/\s/g, '')}&APPID=8822b206bd95f032fa34951362e6e5b3`;
    const URL = 'http://localhost:3000/weather';
    return new Observable((subscriber) => {
      this.http.get(URL)
        .subscribe((response: WeatherDataResponse) => subscriber.next(this.transformResponseData(response, cityName)));
    });
  }

  transformResponseData(response, cityName: String): Object {
    return {
      cityName: cityName,
      id: response.id,
      country: response.sys.country,
      countrId: response.sys.id,
      wind: response.wind,
      visibility: response.visibility,
      clouds: response.clouds,
      cityCoordinates: response.coord,
      currentTemp: Math.floor((response.main.temp - 273.15) * (9 / 5) + 32),
      minTemp: Math.floor((response.main.temp - 273.15) * (9 / 5) + 32),
      maxTemp: Math.floor((response.main.temp - 273.15) * (9 / 5) + 32),
      humidity: response.main.humidity,
      pressure: response.main.pressure,
      sunriseTime: response.sys.sunrise,
      sunsetTime: response.sys.sunset,
      weather: response.weather,
      main: response.weather[0].main,
      icon: '../../../assets/img/weather/' + response.weather[0].icon + '.svg'
    };
  }
}
