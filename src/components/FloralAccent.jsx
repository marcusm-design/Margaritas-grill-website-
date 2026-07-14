export default function FloralAccent({ position }) {
  return (
    <div className={`floral-accent floral-accent--${position}`} aria-hidden="true">
      <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.35">
          <circle cx="60" cy="60" r="8" fill="#c41e3a" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
            <ellipse
              key={angle}
              cx="60"
              cy="28"
              rx="10"
              ry="22"
              fill="#c41e3a"
              transform={`rotate(${angle} 60 60)`}
            />
          ))}
          {[22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5].map((angle) => (
            <ellipse
              key={`inner-${angle}`}
              cx="60"
              cy="38"
              rx="6"
              ry="14"
              fill="#8b1528"
              transform={`rotate(${angle} 60 60)`}
            />
          ))}
        </g>
      </svg>
    </div>
  );
}
