export function HighlightContainer({ children, className = '' }) {
  return <div className={`highlight highlight--${className}`}>{children}</div>;
}
