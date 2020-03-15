import React, { Component } from 'react';
import CurrentWeather from './CurrentWeather';

const API_KEY = '90779b789157e2d5a77f937a7ab51dac';

export class Weather extends Component {
  state = {
    cityName: undefined,
    countryName: undefined,
    fiveDayWeather: []
  };

  componentDidMount() {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=Auckland&appid=${API_KEY}`
    )
      .then(res => res.json())
      .then(data => {
        console.log(data.list);
        this.setState({
          cityName: data.city.name,
          countryName: data.city.country,
          fiveDayWeather: data.list.filter(
            dt_txt => dt_txt.dt_txt.slice(11, 19) === '12:00:00'
          )
        });
        console.log(this.state.fiveDayWeather);
        console.log(this.state.fiveDayWeather[0]);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <CurrentWeather
          cityName={this.state.cityName}
          countryName={this.state.countryName}
          fiveDayWeather={this.state.fiveDayWeather}
        />
      </div>
    );
  }
}

export default Weather;
