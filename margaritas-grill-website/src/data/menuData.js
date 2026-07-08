/**
 * Margaritas Grill — Menu Data
 * -----------------------------------------------
 * Replace items/prices here to match your printed menu images.
 * Each category maps to a filter tab in the Full Menu section.
 */

export const restaurantInfo = {
  name: 'Margaritas Grill',
  tagline: 'Coastal Mexican Seafood & Grill',
  address: '1234 Main Street, Winnemucca, Nevada',
  phone: '(775) 555-0198',
  phoneLink: 'tel:+17755550198',
  hours: [
    { days: 'Mon – Thu', time: '11:00 AM – 9:00 PM' },
    { days: 'Fri – Sat', time: '11:00 AM – 10:00 PM' },
    { days: 'Sunday', time: '10:00 AM – 9:00 PM' },
  ],
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=1234+Main+Street+Winnemucca+Nevada',
};

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Featured', href: '#featured' },
  { label: 'Menu', href: '#menu' },
  { label: 'Location', href: '#location' },
];

export const featuredDishes = [
  {
    id: 'feat-camarones-mojo',
    name: 'Camarones al Mojo de Ajo',
    description:
      'Jumbo shrimp sautéed in garlic butter, white wine, and lime — sizzling and fragrant.',
    price: 24.99,
    // REPLACE: swap with your photo — e.g. import heroCamarones from '../assets/camarones-mojo.jpg'
    image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=600&h=450&fit=crop',
    imageAlt: 'Garlic butter shrimp sizzling in a cast iron skillet',
  },
  {
    id: 'feat-ceviche',
    name: 'Ceviche de Camarón',
    description:
      'Wild shrimp cured in citrus with tomato, cucumber, avocado, and serrano.',
    price: 18.99,
    // REPLACE: swap with your ceviche photo
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&h=450&fit=crop',
    imageAlt: 'Fresh shrimp ceviche with lime and avocado',
  },
  {
    id: 'feat-molcajete',
    name: 'Molcajete del Mar',
    description:
      'Stone bowl of shrimp, fish, octopus, and scallops in roasted chile sauce.',
    price: 34.99,
    // REPLACE: swap with your molcajete photo
    image: 'https://images.unsplash.com/photo-1559847843-531067508f00?w=600&h=450&fit=crop',
    imageAlt: 'Seafood molcajete served in a volcanic stone bowl',
  },
  {
    id: 'feat-pescado',
    name: 'Pescado Zarandeado',
    description:
      'Whole butterflied snapper, mesquite-grilled with house adobo and citrus.',
    price: 29.99,
    // REPLACE: swap with your grilled fish photo
    image: 'https://images.unsplash.com/photo-1515443961218-a5136788e050?w=600&h=450&fit=crop',
    imageAlt: 'Grilled whole fish with charred citrus',
  },
];

export const menuCategories = [
  { id: 'all', label: 'All' },
  { id: 'appetizers', label: 'Appetizers' },
  { id: 'ceviches', label: 'Ceviches & Aguachiles' },
  { id: 'cocteles', label: 'Cocteles & Campechanas' },
  { id: 'entrees', label: 'Platillos del Mar' },
  { id: 'tacos', label: 'Tacos & Tostadas' },
  { id: 'soups', label: 'Caldos & Sopas' },
  { id: 'sides', label: 'Acompañamientos' },
  { id: 'drinks', label: 'Bebidas' },
];

export const menuItems = [
  // ——— Appetizers ———
  {
    id: 'app-1',
    category: 'appetizers',
    name: 'Guacamole Fresco',
    description: 'Tableside-style, lime, serrano, cotija crumble',
    price: 12.99,
  },
  {
    id: 'app-2',
    category: 'appetizers',
    name: 'Queso Fundido con Camarón',
    description: 'Melted Oaxaca, roasted poblano, sautéed shrimp',
    price: 14.99,
  },
  {
    id: 'app-3',
    category: 'appetizers',
    name: 'Empanadas de Camarón',
    description: 'Crispy pastry, chipotle crema, pico de gallo',
    price: 13.99,
  },
  {
    id: 'app-4',
    category: 'appetizers',
    name: 'Calamari Frito',
    description: 'Lightly battered, jalapeño aioli, lime',
    price: 15.99,
  },
  {
    id: 'app-5',
    category: 'appetizers',
    name: 'Ostiones en la Concha',
    description: 'Half dozen fresh oysters, salsa negra, cucumber',
    price: 16.99,
  },

  // ——— Ceviches & Aguachiles ———
  {
    id: 'cev-1',
    category: 'ceviches',
    name: 'Ceviche de Camarón',
    description: 'Classic lime cure, avocado, cucumber, tostadas',
    price: 18.99,
  },
  {
    id: 'cev-2',
    category: 'ceviches',
    name: 'Ceviche de Pescado',
    description: 'Mahi-mahi, tomato, red onion, cilantro, serrano',
    price: 17.99,
  },
  {
    id: 'cev-3',
    category: 'ceviches',
    name: 'Ceviche Mixto',
    description: 'Shrimp, fish, octopus, avocado, lime',
    price: 21.99,
  },
  {
    id: 'cev-4',
    category: 'ceviches',
    name: 'Aguachile Verde',
    description: 'Shrimp in green chile-lime broth, cucumber ribbons',
    price: 19.99,
  },
  {
    id: 'cev-5',
    category: 'ceviches',
    name: 'Aguachile Rojo',
    description: 'Shrimp, arbol chile, lime, red onion, tostadas',
    price: 19.99,
  },

  // ——— Cocteles & Campechanas ———
  {
    id: 'coc-1',
    category: 'cocteles',
    name: 'Coctel de Camarón',
    description: 'Classic shrimp cocktail, avocado, cilantro',
    price: 16.99,
  },
  {
    id: 'coc-2',
    category: 'cocteles',
    name: 'Campechana Especial',
    description: 'Shrimp, octopus, scallops, clamato, lime',
    price: 22.99,
  },
  {
    id: 'coc-3',
    category: 'cocteles',
    name: 'Vuelve a la Vida',
    description: 'Seafood medley, oyster, clam, shrimp, salsa roja',
    price: 24.99,
  },
  {
    id: 'coc-4',
    category: 'cocteles',
    name: 'Ceviche en Vaso',
    description: 'Individual cup, fish & shrimp, spicy tomato broth',
    price: 11.99,
  },

  // ——— Platillos del Mar ———
  {
    id: 'ent-1',
    category: 'entrees',
    name: 'Camarones al Mojo de Ajo',
    description: 'Garlic butter, white wine, rice & beans',
    price: 24.99,
  },
  {
    id: 'ent-2',
    category: 'entrees',
    name: 'Camarones a la Diabla',
    description: 'Spicy arbol chile sauce, Mexican rice',
    price: 24.99,
  },
  {
    id: 'ent-3',
    category: 'entrees',
    name: 'Filete de Pescado a la Plancha',
    description: 'Grilled mahi, garlic butter, seasonal vegetables',
    price: 23.99,
  },
  {
    id: 'ent-4',
    category: 'entrees',
    name: 'Pescado Zarandeado',
    description: 'Whole snapper, mesquite adobo, tortillas',
    price: 29.99,
  },
  {
    id: 'ent-5',
    category: 'entrees',
    name: 'Pulpo a las Brasas',
    description: 'Charred octopus, potato purée, chimichurri',
    price: 27.99,
  },
  {
    id: 'ent-6',
    category: 'entrees',
    name: 'Molcajete del Mar',
    description: 'Shrimp, fish, octopus, scallops, roasted chile',
    price: 34.99,
  },
  {
    id: 'ent-7',
    category: 'entrees',
    name: 'Parrillada de Mariscos',
    description: 'Mixed grill for two — shrimp, fish, scallops',
    price: 49.99,
  },
  {
    id: 'ent-8',
    category: 'entrees',
    name: 'Enchiladas de Camarón',
    description: 'Three enchiladas, green tomatillo, crema',
    price: 19.99,
  },

  // ——— Tacos & Tostadas ———
  {
    id: 'tac-1',
    category: 'tacos',
    name: 'Tacos de Camarón (3)',
    description: 'Grilled or breaded, cabbage slaw, chipotle aioli',
    price: 15.99,
  },
  {
    id: 'tac-2',
    category: 'tacos',
    name: 'Tacos de Pescado (3)',
    description: 'Beer-battered, pico, lime crema',
    price: 14.99,
  },
  {
    id: 'tac-3',
    category: 'tacos',
    name: 'Tostada de Ceviche',
    description: 'Crispy corn, fish ceviche, avocado',
    price: 6.99,
  },
  {
    id: 'tac-4',
    category: 'tacos',
    name: 'Tostada de Camarón',
    description: 'Sautéed shrimp, refried beans, lettuce',
    price: 7.99,
  },

  // ——— Caldos & Sopas ———
  {
    id: 'soup-1',
    category: 'soups',
    name: 'Caldo de Camarón',
    description: 'Shrimp broth, vegetables, rice on the side',
    price: 16.99,
  },
  {
    id: 'soup-2',
    category: 'soups',
    name: 'Caldo de Pescado',
    description: 'Fresh fish, potato, carrot, cilantro',
    price: 15.99,
  },
  {
    id: 'soup-3',
    category: 'soups',
    name: 'Sopa de Mariscos',
    description: 'Shrimp, fish, octopus, tomato broth',
    price: 18.99,
  },
  {
    id: 'soup-4',
    category: 'soups',
    name: 'Sopa de Tortilla',
    description: 'Tomato-chile, avocado, crema, fried strips',
    price: 9.99,
  },

  // ——— Acompañamientos ———
  {
    id: 'side-1',
    category: 'sides',
    name: 'Arroz Mexicano',
    price: 4.99,
  },
  {
    id: 'side-2',
    category: 'sides',
    name: 'Frijoles Charros',
    price: 4.99,
  },
  {
    id: 'side-3',
    category: 'sides',
    name: 'Ensalada de la Casa',
    price: 6.99,
  },
  {
    id: 'side-4',
    category: 'sides',
    name: 'Tortillas (Corn or Flour)',
    price: 2.99,
  },

  // ——— Bebidas ———
  {
    id: 'drk-1',
    category: 'drinks',
    name: 'Margarita Clásica',
    description: 'Tequila, triple sec, fresh lime',
    price: 10.99,
  },
  {
    id: 'drk-2',
    category: 'drinks',
    name: 'Margarita de Mango',
    description: 'House mango purée, tajín rim',
    price: 11.99,
  },
  {
    id: 'drk-3',
    category: 'drinks',
    name: 'Michelada',
    description: 'Beer, lime, chamoy, spicy rim',
    price: 8.99,
  },
  {
    id: 'drk-4',
    category: 'drinks',
    name: 'Agua de Jamaica',
    price: 3.99,
  },
  {
    id: 'drk-5',
    category: 'drinks',
    name: 'Agua de Horchata',
    price: 3.99,
  },
  {
    id: 'drk-6',
    category: 'drinks',
    name: 'Jarritos (assorted)',
    price: 3.49,
  },
];
