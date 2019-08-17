import React, { Component } from 'react';
import WeatherDetails from './WeatherDetails';

export class CurrentWeather extends Component {
  render() {
    const { cityName, countryName } = this.props;

    return (
      <div>
        <div className='weather-header'>
          <p>
            Weather forecast in {cityName}, {countryName}
          </p>
        </div>
        <div>
          <WeatherDetails fiveDayWeather={this.props.fiveDayWeather} />
        </div>
      </div>
    );
  }
}

export default CurrentWeather;
