export function HighlightHumidity({ humidity }) {
  return (
    <>
      <p className="highlight--title">Humidity</p>
      <p className="highlight--humidity highlight--stat">
        {humidity} <span className="highlight--unit">%</span>
      </p>
      <input
        type="range"
        max={100}
        min={0}
        id="highlight--humidity--range"
        value={humidity}
      />
    </>
  );
}
