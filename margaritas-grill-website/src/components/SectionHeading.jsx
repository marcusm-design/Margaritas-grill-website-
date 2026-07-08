export default function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <header className="section-heading">
      {eyebrow && <span className="section-heading__eyebrow">{eyebrow}</span>}
      <h2 className="section-heading__title">{title}</h2>
      {subtitle && <p className="section-heading__subtitle">{subtitle}</p>}
      <div className="section-heading__divider" aria-hidden="true">
        <span>✦</span>
      </div>
    </header>
  );
}
