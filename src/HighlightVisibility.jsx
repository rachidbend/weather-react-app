export function HighlightVisibility({ visibility }) {
  return (
    <>
      <p className="highlight--title">Visibility</p>
      <p className="highlight--visibility highlight--stat">
        {(visibility * 0.000621371).toFixed(2)}{' '}
        <span className="highlight--unit">miles</span>
      </p>
    </>
  );
}
