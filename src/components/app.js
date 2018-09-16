import React, { Component } from 'react';
import SearchBar from '../containers/search-bar';
import WeatherList from '../containers/weather_list';

export default class App extends Component {
  render() {
    return (
      <div>
      <h1> Search for Weather Information! </h1>
      <SearchBar />
      <WeatherList />
      </div>
    );
  }
}
