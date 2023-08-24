import { HighlightContainer } from './HighlightContainer';
import { HighlightHumidity } from './HighlightHumidity';
import { HighlightPressure } from './HighlightPressure';
import { HighlightVisibility } from './HighlightVisibility';
import { HighlightWind } from './HighlightWind';

/* eslint-disable react/prop-types */
export function Highlights({ weatherData }) {
  console.log(weatherData);
  return (
    <div className="highlights">
      <h3>Today&apos;s Hightlights</h3>
      <div className="highlights-container">
        <HighlightContainer className="wind">
          <HighlightWind
            windSpeed={weatherData.wind.speed}
            windDirection={weatherData.wind.deg}
          />
        </HighlightContainer>
        {/*  */}
        <HighlightContainer className="humidity">
          <HighlightHumidity humidity={weatherData.main.humidity} />
        </HighlightContainer>
        {/*  */}
        <HighlightContainer className="visibility">
          <HighlightVisibility visibility={weatherData.visibility} />
        </HighlightContainer>
        {/*  */}
        <HighlightContainer className="pressure">
          <HighlightPressure airPressure={weatherData.main.pressure} />
        </HighlightContainer>
        {/*  */}
      </div>
    </div>
  );
}
