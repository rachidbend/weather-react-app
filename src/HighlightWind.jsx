export function HighlightWind({ windSpeed, windDirection }) {
  return (
    <>
      <p className="highlight--title">Wind status</p>
      <p className="highlight--wind-speed highlight--stat">
        {(windSpeed * 2.23694).toFixed(2)}
        <span className="highlight--unit">mph</span>
      </p>
      <p className="highlight--wind-direction">
        <span className="highlight--wind-direction--icon"></span>
        {windDirection}
      </p>
    </>
  );
}
