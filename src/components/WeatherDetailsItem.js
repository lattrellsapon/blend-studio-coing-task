import React, { Component } from 'react';
import Moment from 'moment';

export class WeatherDetailsItem extends Component {
  state = {
    weatherIcon: ''
  };

  changeBgColor = () => {
    if (
      this.props.day.weather[0].main === 'Rain' ||
      this.props.day.weather[0].main === 'Thunderstorm' ||
      this.props.day.weather[0].main === 'Drizzle' ||
      this.props.day.weather[0].main === 'Snow'
    ) {
      return {
        background: '#99ccff',
        color: '#000'
      };
    } else if (this.props.day.weather[0].main === 'Clouds') {
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

  componentDidMount() {
    if (
      this.props.day.weather[0].main === 'Rain' ||
      this.props.day.weather[0].main === 'Thunderstorm' ||
      this.props.day.weather[0].main === 'Drizzle'
    ) {
      this.setState({
        weatherIcon: 'fas fa-cloud-showers-heavy'
      });
    } else if (this.props.day.weather[0].main === 'Clouds') {
      this.setState({
        weatherIcon: 'fas fa-cloud'
      });
    } else if (this.props.day.weather[0].main === 'Clear') {
      this.setState({
        weatherIcon: 'fas fa-sun'
      });
    }
  }

  render() {
    return (
      <div className='weather-details-container' style={this.changeBgColor()}>
        <div className='date-of-day'>
          <p>
            {Moment(
              Moment(this.props.day.dt_txt).format('YYYY-MM-DD HH:MM:ss')
            ).format('dddd')}{' '}
            ({Moment(this.props.day.dt_txt).format('DD-MM-YYYY')})
          </p>
        </div>
        <div className='current-temp'>
          <p>
            {Math.round(this.props.day.main.temp - 273.15)} &#176;{' '}
            <i className={this.state.weatherIcon} />
          </p>
        </div>
        <div className='weather-forecast'>
          <p>Forecast: {this.props.day.weather[0].main}</p>
          <p>Description: {this.props.day.weather[0].description}</p>
        </div>
      </div>
    );
  }
}

export default WeatherDetailsItem;
