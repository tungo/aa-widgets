import React from 'react';

class Weather extends React.Component{
  constructor() {
    super();

    this.state = { city: '', temp: '' };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let long = position.coords.longitude;

      let xhr = new XMLHttpRequest();
      xhr.open('GET', `http://api.openweathermap.org/data/2.5/weather?APPID=4d60985e3d66dec2bd656fba9987691d&lat=${lat}&lon=${long}&units=imperial`);

      xhr.onload = () => {
        let res = JSON.parse(xhr.responseText);

        console.log(res);

        if (xhr.status >= 200 && xhr.status < 400) {
          this.setState({ city: res.name, temp: res.main.temp });
        } else {
          console.log(res);
        }
      };

      xhr.send();
    });
  }

  render() {
    return (
      <div className="weather">
        <h1>Weather</h1>
        <div>{this.state.city}<br/>{`${this.state.temp} degrees`}</div>
      </div>
    );
  }
}

export default Weather;
