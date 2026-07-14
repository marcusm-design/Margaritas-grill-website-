export function formatPrice(price) {
  return `$${price.toFixed(2)}`;
}

export function scrollToSection(id) {
  const el = document.querySelector(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
