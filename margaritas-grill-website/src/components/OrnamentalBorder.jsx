export default function OrnamentalBorder({ children, className = '' }) {
  return (
    <div className={`ornamental-border ${className}`}>
      <span className="ornamental-border__corner ornamental-border__corner--tl" aria-hidden="true" />
      <span className="ornamental-border__corner ornamental-border__corner--tr" aria-hidden="true" />
      <span className="ornamental-border__corner ornamental-border__corner--bl" aria-hidden="true" />
      <span className="ornamental-border__corner ornamental-border__corner--br" aria-hidden="true" />
      <div className="ornamental-border__inner">{children}</div>
    </div>
  );
}
