import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialUiModule } from './material-ui-module/material-ui.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { WeatherComponent } from './home/weather/weather.component';
import { SearchComponent } from './home/search/search.component';

import { StoreModule } from '@ngrx/store';
import { cityListReducer } from './app-store/citylist-reducer/citylist.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { WeatherCardComponent } from './weather/weather-card/weather-card.component';
import { HttpConfigService } from './common/adapter-services/http-config.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    WeatherComponent,
    SearchComponent,
    WeatherCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialUiModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({cityList: cityListReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 5
    })
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpConfigService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
