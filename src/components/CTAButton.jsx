export default function CTAButton({ href, children, variant = 'primary', onClick, className = '' }) {
  const Tag = href ? 'a' : 'button';
  const external = href?.startsWith('http');
  const props = href
    ? {
        href,
        onClick,
        ...(external || href?.startsWith('tel')
          ? { target: external ? '_blank' : undefined, rel: external ? 'noopener noreferrer' : undefined }
          : {}),
      }
    : { type: 'button', onClick };

  return (
    <Tag className={`cta-button cta-button--${variant} ${className}`} {...props}>
      <span className="cta-button__label">{children}</span>
    </Tag>
  );
}
