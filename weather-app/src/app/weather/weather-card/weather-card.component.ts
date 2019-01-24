import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.less']
})

export class WeatherCardComponent implements OnInit {
  @Input() weatherData: Array<Object>;
  @Output() deleteCard = new EventEmitter<object>();
  constructor() { }

  ngOnInit() {
  }

  deleteCardClicked() {
    this.deleteCard.emit(this.weatherData);
  }
}
