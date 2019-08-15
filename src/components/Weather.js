import React, { Component } from 'react';
import Moment from 'moment';

const API_KEY = '90779b789157e2d5a77f937a7ab51dac';

export class Weather extends Component {
  state = {
    cityName: undefined,
    countryName: undefined,
    weatherForecast: undefined,
    weatherDescription: undefined,
    weatherTemperature: undefined,
    weatherIcon: undefined,
    currentDate: Date()
  };
  componentDidMount() {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=Auckland&appid=${API_KEY}`
    )
      .then(res => res.json())
      .then(data => {
        this.setState({
          cityName: data.name,
          countryName: data.sys.country,
          weatherForecast: data.weather[0].main,
          weatherDescription: data.weather[0].description,
          weatherTemperature: Math.round(data.main.temp - 273.15)
        });
        if (
          data.weather[0].main === 'Rain' ||
          data.weather[0].main === 'Thunderstorm' ||
          data.weather[0].main === 'Drizzle'
        ) {
          this.setState({
            weatherIcon: 'fas fa-cloud-showers-heavy'
          });
        } else if (data.weather[0].main === 'Clouds') {
          this.setState({
            weatherIcon: 'fas fa-cloud'
          });
        } else if (data.weather[0].main === 'Clear') {
          this.setState({
            weatherIcon: 'fas fa-sun'
          });
        }
      });
  }

  changeBgColor = () => {
    if (
      this.state.weatherForecast === 'Rain' ||
      this.state.weatherForecast === 'Thunderstorm' ||
      this.state.weatherForecast === 'Drizzle' ||
      this.state.weatherForecast === 'Snow'
    ) {
      return {
        background: '#99ccff',
        color: '#000'
      };
    } else if (this.state.weatherForecast === 'Clouds') {
      return {
        background: '#808080',
        color: '#fff'
      };
    } else {
      return {
        background: '#fdb813',
        color: '#000'
      };
    }
  };

  render() {
    return (
      <div className='weather-widget' style={this.changeBgColor()}>
        <div>
          <div className='weather-location'>
            <p>
              {this.state.cityName}, {this.state.countryName}
            </p>
          </div>
          <div>
            <p>{Moment(this.state.currentDate).format('DD-MM-YYYY')}</p>
          </div>
          <div className='weather-temperature'>
            <p>
              {this.state.weatherTemperature} &#176;{' '}
              <i className={this.state.weatherIcon} />
            </p>
          </div>
          <div className='weather-forecast'>
            <p>{this.state.weatherForecast}</p>
          </div>
          <div className='weather-description'>
            <p>{this.state.weatherDescription}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Weather;
