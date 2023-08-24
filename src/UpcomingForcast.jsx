/* eslint-disable react/prop-types */
import { ForcastOfDay } from './ForcastOfDay';

// this gets the forcast which is an array of the weather in the next 5 days
export function UpcomingForcast({ weatherForcast }) {
  console.log(weatherForcast);
  return (
    <div className="upcomming-forcast">
      {weatherForcast.map((forcast, i) => (
        <ForcastOfDay
          dayDate={forcast.dt_txt}
          maxTemp={(forcast.main.temp_max - 273.15).toFixed(1)}
          minTemp={(forcast.main.temp_min - 273.15).toFixed(1)}
          weather={forcast.weather.at(0).description}
          key={`${new Date()}-${weatherForcast.dt}${i}`}
        />
      ))}
    </div>
  );
}
