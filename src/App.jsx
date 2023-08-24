import { useEffect, useState } from 'react';
import './App.scss';
import { CurrentWeatherPanel } from './CurrentWeatherPanel';
import { SearchPanel } from './SearchPanel';
import { ForcastContainer } from './ForcastContainer';
import { DegreeToggle } from './DegreeToggle';
import { UpcomingForcast } from './UpcomingForcast';
import { Highlights } from './Highlights';
import { extractUniqueDays } from './extractUniqueDays';

// const KEY = '702369c35ba3d09c01212dd187d99d7e';
const KEY = '1cb3310072a70eabebd5a0ea30592c64';
const api = `api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}`;

const geoKEY = '351033302760799866119x43556';
// https://geocode.xyz/city=london?json=1&auth=351033302760799866119x43556

const data = {
  cod: '200',
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1661871600,
      main: {
        temp: 295.45,
        feels_like: 296.98,
        temp_min: 292.45,
        temp_max: 293.45,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 933,
        humidity: 69,
        temp_kf: -1.11,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 0.62,
        deg: 349,
        gust: 1.18,
      },
      visibility: 10000,
      pop: 0.32,
      rain: {
        '3h': 0.26,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-08-24 15:00:00',
    },
    {
      dt: 1661882400,
      main: {
        temp: 295.45,
        feels_like: 295.59,
        temp_min: 292.84,
        temp_max: 295.45,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 931,
        humidity: 71,
        temp_kf: 2.61,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n',
        },
      ],
      clouds: {
        all: 96,
      },
      wind: {
        speed: 1.97,
        deg: 157,
        gust: 3.39,
      },
      visibility: 10000,
      pop: 0.33,
      rain: {
        '3h': 0.57,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-08-24 18:00:00',
    },
    {
      dt: 1661893200,
      main: {
        temp: 292.46,
        feels_like: 292.54,
        temp_min: 290.31,
        temp_max: 292.46,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 931,
        humidity: 80,
        temp_kf: 2.15,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n',
        },
      ],
      clouds: {
        all: 68,
      },
      wind: {
        speed: 2.66,
        deg: 210,
        gust: 3.58,
      },
      visibility: 10000,
      pop: 0.7,
      rain: {
        '3h': 0.49,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-08-25 21:00:00',
    },

    {
      dt: 1662292800,
      main: {
        temp: 294.93,
        feels_like: 294.83,
        temp_min: 294.93,
        temp_max: 294.93,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 935,
        humidity: 64,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 88,
      },
      wind: {
        speed: 1.14,
        deg: 17,
        gust: 1.57,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-08-25 12:00:00',
    },
    {
      dt: 1661871600,
      main: {
        temp: 15,
        feels_like: 296.98,
        temp_min: 12,
        temp_max: 18,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 933,
        humidity: 69,
        temp_kf: -1.11,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 0.62,
        deg: 349,
        gust: 1.18,
      },
      visibility: 10000,
      pop: 0.32,
      rain: {
        '3h': 0.26,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-08-26 15:00:00',
    },
    {
      dt: 1661871600,
      main: {
        temp: 15,
        feels_like: 296.98,
        temp_min: 12,
        temp_max: 18,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 933,
        humidity: 69,
        temp_kf: -1.11,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 0.62,
        deg: 349,
        gust: 1.18,
      },
      visibility: 10000,
      pop: 0.32,
      rain: {
        '3h': 0.26,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-08-26 15:00:00',
    },
    {
      dt: 1661871600,
      main: {
        temp: 15,
        feels_like: 296.98,
        temp_min: 12,
        temp_max: 18,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 933,
        humidity: 69,
        temp_kf: -1.11,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 0.62,
        deg: 349,
        gust: 1.18,
      },
      visibility: 10000,
      pop: 0.32,
      rain: {
        '3h': 0.26,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-08-27 15:00:00',
    },
  ],
  city: {
    id: 3163858,
    name: 'Zocca',
    coord: {
      lat: 44.34,
      lon: 10.99,
    },
    country: 'IT',
    population: 4593,
    timezone: 7200,
    sunrise: 1661834187,
    sunset: 1661882248,
  },
};

// /////////////////////////////////
// APP
// /////////////////////////////////
export default function App() {
  const [weatherData, setWeatherData] = useState(data.list);
  const [searchToggle, setSearchToggle] = useState(true);
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
    // 1- add to search history
    setSearchHistory(history => [query, ...history]);
    setCityName(query);
    // 2- get the city coords
    const { lat, lon } = await getCityByName(query);
    // 3- get the weather for the city
    //  or show an error message
    const weather = await getWeather(lat, lon);
    setWeatherData(weather);
    // 4- reset the search query
    setQuery('');
  }

  return (
    <div className="app">
      <SearchPanel
        toggleClassName={searchToggle ? 'active' : ''}
        onToggleSearch={handleToggleSearch}
        onQueryChange={handleQueryChange}
        query={query}
        onSearch={handleSearch}
      />
      <CurrentWeatherPanel
        onToggleSearch={handleToggleSearch}
        weatherToday={sortedDays.at(0)}
        cityName={cityName}
      />
      <ForcastContainer>
        <DegreeToggle />
        <UpcomingForcast weatherForcast={sortedDays.slice(1)} />
        <Highlights weatherData={weatherData.at(0)} />
      </ForcastContainer>
    </div>
  );
}
