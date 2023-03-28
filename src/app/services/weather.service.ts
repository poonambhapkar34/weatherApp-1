import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  cityName: string = "mumbai";

  constructor(private http: HttpClient) { }

  getAllWeatherData(){
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.cityName}&appid=c8875bf85fb4a9721d3f00dd394d27c1&units=metric`)
  }


}
