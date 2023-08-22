export function Highlights() {
  return (
    <div className="highlights">
      <h3>Today&apos;s Hightlights</h3>
      <div className="highlights-container">
        <div className="highlight highlight--wind">
          <p className="highlight--title">Wind status</p>
          <p className="highlight--wind-speed">7mph</p>
          <p className="highlight--wind-direction">
            <span className="highlight--wind-direction--icon"></span>
            WSW
          </p>
        </div>
        {/*  */}
        <div className="highlight highlight--wind">
          <p className="highlight--title">Humidity</p>
          <p className="highlight--humidity">84%</p>
          <input
            type="range"
            max={100}
            min={0}
            id="highlight--humidity--range"
            value={84}
          />
        </div>
        {/*  */}
        <div className="highlight highlight--wind">
          <p className="highlight--title">Visibility</p>
          <p className="highlight--visibility">6.4 miles</p>
        </div>
        {/*  */}
        <div className="highlight highlight--wind">
          <p className="highlight--title">Air Pressure</p>
          <p className="highlight--air-pressure">998mb</p>
        </div>
        {/*  */}
      </div>
    </div>
  );
}
