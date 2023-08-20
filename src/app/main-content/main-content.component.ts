import { Component } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent {

  okResponse!: any;
  errorResponse!: any;
  temperature!: number;
  max_temp!: number;
  min_temp!: number;
  humidity!: number;
  windSpeed!: number;
  responseCity!: string;
  wImg = "../../assets/hot-temp.png"
  _searchedValue = 'mumbai';
  get searchedValue(){
    return this._searchedValue;
  }
  set searchedValue(input: string){
    this._searchedValue = input.toLowerCase();
    this.weatherService.cityName = this._searchedValue;
    this.okResponse = undefined;
    this.getData()
  }
  
  constructor(private weatherService: WeatherService){ }

  ngOnInit(){
    this.getData();
  }

  getData(){
    this.weatherService.getAllWeatherData().subscribe((data)=>{
      console.log(data);
      this.okResponse = data;
      console.log('data',data);
      
      this.temperature = this.okResponse.main.temp;
      this.max_temp = this.okResponse.main.temp_max;
      this.min_temp = this.okResponse.main.temp_min;
      this.humidity = this.okResponse.main.humidity;
      this.windSpeed = this.okResponse.wind.speed;
      this.responseCity = this.okResponse.name;
      console.log(this.okResponse.main.temp_max);
      
      
    },(err)=>{
      console.log(err.statusText);
      this.errorResponse = err.message
      
    })
  }


  cityNotFound(){
    if(this.temperature < 10 && this.okResponse){
      return 'bg-cold'
    }else if(!this.okResponse && this.searchedValue){
      return 'not-found'
    }else if(!this.searchedValue){
      return 'not-entered'
    }else{
      return 'bg-hot'
    }
  }

}
