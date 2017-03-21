import React, {Component} from 'react';
import {connect} from 'react-redux';
//import {Sparklines, SparklinesLine} from 'react-sparklines';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    //const temps = cityData.list.map(weather => weather.main.temp);
    const temps = cityData.list.map(function(weather){
      return weather.main.temp;
    });
    //const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp - 273 );
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    //const lon = cityData.city.coord.lon;
    //const lat = cityData.city.coord.lat;
    const {lon, lat} = cityData.city.coord; // ES6 convention

    //console.log(temps);

    return (
      <tr key={name}>
        {/*<td>{name}</td>*/}
        <td><GoogleMap lon={lon} lat={lat}/></td>
        <td>
        {/*
          <Sparklines height={120} width={180} data={temps}>
            <SparklinesLine color="red" />
          </Sparklines>
        */}
          <Chart data={temps} color="orange" units="K"/>
        </td>
        <td><Chart data={pressures} color="blue" units="hPa"/></td>
        <td><Chart data={humidities} color="red" units="%"/></td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

/*
function mapStateToProps(state) {
  // Using state.weather as weather is defined as WeatherReducer
  // in the combinedReducers reducers/index.js
  return {weather : state.weather};
}

function mapStateToProps(state) {
  const weather = state.weather;
  // Using state.weather as weather is defined as WeatherReducer
  // in the combinedReducers reducers/index.js
  return {weather : weather};
}
*/
function mapStateToProps({weather}) {
  return {weather}; // {weather} === {weather:weather}
}

export default connect(mapStateToProps)(WeatherList);
