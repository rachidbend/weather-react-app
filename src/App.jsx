import { useEffect, useState } from 'react';
import './App.scss';
import { CurrentWeatherPanel } from './CurrentWeatherPanel';
import { SearchPanel } from './SearchPanel';
import { ForcastContainer } from './ForcastContainer';
import { DegreeToggle } from './DegreeToggle';
import { UpcomingForcast } from './UpcomingForcast';
import { Highlights } from './Highlights';
import { extractUniqueDays } from './extractUniqueDays';
import data from './data';

// const KEY = '702369c35ba3d09c01212dd187d99d7e';
const KEY = '1cb3310072a70eabebd5a0ea30592c64';
// const api = `api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}`;

const geoKEY = '351033302760799866119x43556';
// https://geocode.xyz/city=london?json=1&auth=351033302760799866119x43556

// /////////////////////////////////
// APP
// /////////////////////////////////
export default function App() {
  const [weatherData, setWeatherData] = useState(data.list);
  const [searchToggle, setSearchToggle] = useState(false);
  const [query, setQuery] = useState('');
  const [cityName, setCityName] = useState('khenifra');
  const [searchHistory, setSearchHistory] = useState([]);

  // derive the unique days from the fetched weather data
  const sortedDays = extractUniqueDays(weatherData);

  // gets the weathe of a city based on the gecolocation data
  async function getWeather(lat, lon) {
    try {
      const res = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${KEY}`
      );
      const data = await res.json();

      return data?.list;
    } catch (err) {
      console.log(err);
    }
  }

  // gets the name of the city based on the gecolocation data
  async function getCityName(lat, lon) {
    const res = await fetch(
      `https://geocode.xyz/${lat},${lon}?geoit=json&auth=${geoKEY}`
    );
    const data = await res.json();
    return data.city;
  }

  // gets the city geocode based on the name of the city
  async function getCityByName(name) {
    const res = await fetch(
      `https://geocode.xyz/cityname=${name}?json=1&auth=${geoKEY}`
    );
    const data = await res.json();
    const { latt: lat, longt: lon } = data;
    console.log(data);
    return { lat, lon };
  }

  // gets the curent position of the user
  const getPosition = function () {
    return new Promise(function (reslove, reject) {
      navigator.geolocation.getCurrentPosition(reslove, reject);
    });
  };

  // when the user requests his location, do get it and get its weather
  function handleGetUserPosition() {
    async function getCurrentLocation() {
      // get users current position
      const position = await getPosition();
      const { latitude: lat, longitude: lon } = position.coords;

      // get the name of the city of the user
      const fetchedCityName = await getCityName(lat, lon);

      setCityName(fetchedCityName);

      // get the weather of that city
      const cityWeather = await getWeather(lat, lon);
      setWeatherData(cityWeather);
      setCityName(fetchedCityName);
      setSearchHistory(searchHistory => [fetchedCityName, ...searchHistory]);
    }
    getCurrentLocation();
  }

  function handleQueryChange(e) {
    const value = e.target.value;
    console.log(value);
    setQuery(value);
  }

  function handleToggleSearch(toggle) {
    setSearchToggle(toggle);
  }

  async function handleSearch() {
    // 1- add to search history, query, and toggle search panel
    setSearchHistory(history => [query, ...history]);
    setCityName(query);
    setSearchToggle(false);

    // 2- get the city coords
    const { lat, lon } = await getCityByName(query);
    // 3- get the weather for the city
    //  or show an error message
    const weather = await getWeather(lat, lon);
    setWeatherData(weather);
    // 4- reset the search query
    setQuery('');
  }

  async function handleHistoryClick(cityName) {
    // 1- get the coords based on city name
    const { lat, lon } = await getCityByName(cityName);
    // 2- get the weather of that city
    const weather = await getWeather(lat, lon);
    setWeatherData(weather);
    setCityName(cityName);
  }

  return (
    <div className="app">
      <SearchPanel
        toggleClassName={searchToggle ? 'active' : ''}
        onToggleSearch={handleToggleSearch}
        onQueryChange={handleQueryChange}
        query={query}
        onSearch={handleSearch}
        searchHistory={searchHistory}
        onHistoryClick={handleHistoryClick}
      />
      <CurrentWeatherPanel
        onToggleSearch={handleToggleSearch}
        weatherToday={sortedDays.at(0)}
        cityName={cityName}
        onGetUserPosition={handleGetUserPosition}
      />
      <ForcastContainer>
        <DegreeToggle />
        <UpcomingForcast weatherForcast={sortedDays.slice(1)} />
        <Highlights weatherData={weatherData.at(0)} />
      </ForcastContainer>
    </div>
  );
}
