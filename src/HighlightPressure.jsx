export function HighlightPressure({ airPressure }) {
  return (
    <>
      <p className="highlight--title">Air Pressure</p>
      <p className="highlight--air-pressure highlight--stat">
        {airPressure} <span className="highlight--unit">mb</span>
      </p>
    </>
  );
}
