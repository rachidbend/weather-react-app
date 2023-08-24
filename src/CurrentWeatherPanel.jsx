/* eslint-disable react/prop-types */
import { WeatherIcon } from './WeatherIcon';
import gpsFixedIcon from './assets/gps-fixed.svg';
import locationPinIcon from './assets/location-pin-svgrepo-com.svg';
import formatDate from './formatDate';

export function CurrentWeatherPanel({
  onToggleSearch,
  weatherToday,
  cityName,
}) {
  const todaysDate = formatDate(weatherToday.dt_txt);

  return (
    <div className="current-weather-panel">
      <div className="current-weather-panel--btn-container">
        <button
          className="btn btn--search--open "
          onClick={() => onToggleSearch(true)}
        >
          Search for places
        </button>
        <button className="btn btn--curr-location">
          <img src={gpsFixedIcon} alt="get your location" />
        </button>
      </div>
      <div className="weather-icon--container">
        <WeatherIcon weather={weatherToday.weather.at(0).description} />
      </div>
      <p className="current-weather--degree">
        {(weatherToday.main.temp - 273.15).toFixed(1)}
        <span className="current-weather-panel--degree-symbol">
          {' '}
          &deg;C
        </span>{' '}
      </p>
      <p className="current-weather--description">
        {weatherToday.weather.at(0).main}
      </p>

      <p className="weather--date">
        {' '}
        Today <span className="weather--date--sepirate">•</span> {todaysDate}{' '}
      </p>

      <div>
        <p className="current-weather-panel--city">
          <img src={locationPinIcon} alt="location pin icon" />
          {cityName}
        </p>
      </div>
    </div>
  );
}
