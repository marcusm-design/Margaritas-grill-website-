// Header scroll animation
const header = document.querySelector(".header");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;

  header.classList.toggle("header--scrolled", currentScrollY > 50);
  header.classList.toggle("header--hidden", currentScrollY > lastScrollY && currentScrollY > 120);

  lastScrollY = currentScrollY;
});

// Reusable fade-in observer
function fadeInWhenVisible(selector, className) {
  const section = document.querySelector(selector);

  if (!section) return;

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        section.classList.toggle(className, entry.isIntersecting);
      });
    },
    { threshold: 0.3 }
  );

  observer.observe(section);
}

fadeInWhenVisible(".about", "about--show");
fadeInWhenVisible(".hero", "hero--show");
fadeInWhenVisible(".location", "location--show");

