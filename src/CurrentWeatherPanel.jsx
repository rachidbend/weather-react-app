/* eslint-disable react/prop-types */
import { WeatherIcon } from './WeatherIcon';

export function CurrentWeatherPanel({
  onToggleSearch,
  weatherToday,
  cityName,
}) {
  const todaysDate = new Date(weatherToday.dt).toLocaleDateString();
  console.log(weatherToday);
  return (
    <div style={{ backgroundColor: 'green' }} className="current-weather-panel">
      <button className="btn btn--search" onClick={() => onToggleSearch(true)}>
        Search for places
      </button>
      <button className="btn btn--curr-location">get location</button>
      <WeatherIcon weather={weatherToday.weather.at(0).description} />
      <p className="current-weather--degree">{weatherToday.main.temp} </p>
      <p className="current-weather--description"></p>
      <div>
        <p> {weatherToday.weather.at(0).main} </p>
        <p> {todaysDate} </p>
      </div>
      <div>
        <p>
          <span>🪧</span>
          {cityName}
        </p>
      </div>
    </div>
  );
}
