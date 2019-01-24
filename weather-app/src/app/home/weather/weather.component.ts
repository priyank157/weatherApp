import { Component, OnInit } from '@angular/core';
import { WeatherDataProviderService } from '../../common/data-transform-services/weather-data-provider.service';

@Component({
  selector: 'app-weather-board',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.less']
})
export class WeatherComponent implements OnInit {

  city: Array<string> = ['London', 'London'];
  weatherDataList: Array<object> = [];
  isCityToDisplay: Boolean = false;
  constructor(private weatherDataProvider: WeatherDataProviderService) { }

  ngOnInit() {
    this.weatherDataProvider.weatherProvider$.subscribe((weatherData) => {
      this.weatherDataList = [...weatherData];
      });
    this.isCityToDisplay = this.city.length > 0 ? true : false;
  }

  deleteCardClicked($event) {
    this.weatherDataProvider.deleteWeatherDataOfCity($event.cityName);
  }
}
