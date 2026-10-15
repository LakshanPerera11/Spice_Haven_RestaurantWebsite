# Spice Haven – Restaurant Website

A complete full-stack-feeling restaurant website built with **React + Vite + Tailwind CSS v4**.

## Features

- **Home Page** – Hero banner, features, featured dishes, CTA
- **Menu Page** – Full menu with category filters, search, vegetarian/spicy filters, sorting
- **Food Detail Page** – Individual dish pages with ingredients, quantity selector, related items
- **About Page** – Restaurant history, milestones timeline, chef profiles
- **Services Page** – Online ordering info, delivery details, how-it-works steps
- **Contact Page** – Contact form (saved to localStorage) + full contact details
- **Login / Sign Up** – Auth with localStorage (no backend needed)
- **Shopping Cart** – Add/remove items, quantity control, checkout flow, order placement
- **Responsive Design** – Mobile-first, works on all screen sizes
- **Local Storage** – Users, cart, orders, and contact messages persist in browser

## Tech Stack

- React 19
- Vite 6
- Tailwind CSS 4
- React Router DOM 7
- Lucide React (icons)

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Open http://localhost:5173 in your browser.

## Deployment notes

Build the site with `npm run build` and publish the generated `dist` directory.
The application uses React Router's `BrowserRouter`, so a static host must
rewrite unknown paths to `index.html`; otherwise refreshing a route such as
`/menu/11` can return a 404. Configure this as a single-page application (SPA)
rewrite in your hosting provider.

For GitHub Pages, deploy the `dist` directory using a Pages-compatible workflow
and configure the Vite `base` path to match the repository URL
(`/Spice_Haven_RestaurantWebsite/`). GitHub Pages does not provide SPA rewrites
for direct browser requests by default.

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── FoodCard.jsx
│   └── CartDrawer.jsx
├── pages/
│   ├── Home.jsx
│   ├── Menu.jsx
│   ├── FoodDetail.jsx
│   ├── About.jsx
│   ├── Services.jsx
│   ├── Contact.jsx
│   └── Login.jsx
├── context/
│   ├── AuthContext.jsx
│   └── CartContext.jsx
├── data/
│   └── menu.js
├── App.jsx
├── main.jsx
└── index.css
```

## How Auth & Cart Work

- **Sign Up / Login**: Users are stored in `localStorage` under `spicehaven_users`. Current session in `spicehaven_user`.
- **Cart**: Persisted in `spicehaven_cart`. Orders saved to `spicehaven_orders`.
- **Contact messages**: Saved to `spicehaven_messages`.

No backend required — everything runs client-side.

## Documentation

See `DOCUMENTATION.md` for problems faced and solutions.

## License

MIT
