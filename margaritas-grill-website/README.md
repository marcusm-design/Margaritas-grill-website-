# Margaritas Grill Website

A responsive restaurant website for **Margaritas Grill** — premium Mexican seafood in Winnemucca, Nevada.

Built with React + Vite.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── FeaturedDishes.jsx
│   ├── FullMenu.jsx
│   ├── Location.jsx
│   ├── Footer.jsx
│   ├── MenuRow.jsx       # Name ··· Price layout
│   ├── CTAButton.jsx
│   ├── OrnamentalBorder.jsx
│   ├── SectionHeading.jsx
│   └── FloralAccent.jsx
├── data/
│   └── menuData.js   # ← Edit menu items, prices, and restaurant info here
├── styles/
│   └── global.css
└── utils/
    └── helpers.js
```

## Customization

### Menu Content
Edit `src/data/menuData.js` to match your printed menu. Each item needs:
- `id`, `category`, `name`, `price`
- Optional `description`

### Replace Placeholder Images
Search for `REPLACE` comments in the codebase:
- **Hero background** — `src/styles/global.css` (`.hero__backdrop`)
- **About photo** — `src/components/About.jsx`
- **Featured dishes** — `src/data/menuData.js` (`featuredDishes` array)
- **Google Maps** — `src/components/Location.jsx`

Recommended: add images to `src/assets/` and import them in components.

### Restaurant Info
Update phone, hours, and address in `src/data/menuData.js` → `restaurantInfo`.

## Build for Production

```bash
npm run build
npm run preview
```

Output goes to the `dist/` folder.
