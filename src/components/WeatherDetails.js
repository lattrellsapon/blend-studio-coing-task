import React, { Component } from 'react';
import WeatherDetailsItem from './WeatherDetailsItem';

export class WeatherDetails extends Component {
  render() {
    return (
      <div className='five-grid'>
        {this.props.fiveDayWeather.map(day => (
          <WeatherDetailsItem key={day.dt} day={day} />
        ))}
      </div>
    );
  }
}

export default WeatherDetails;
