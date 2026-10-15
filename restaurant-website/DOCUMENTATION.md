# Project Documentation – Spice Haven Restaurant Website

## Problems Faced & Solutions

### 1. State Management without Backend
**Problem:** The requirement was to use local storage only (no real backend/API). Auth, cart, and form submissions needed to persist across page refreshes.

**Solution:**  
Created two React Contexts (`AuthContext` and `CartContext`) that:
- Read from `localStorage` on mount
- Write back to `localStorage` whenever state changes
- Provide clean hooks (`useAuth`, `useCart`) for any component

This keeps the code clean and avoids prop-drilling while fully satisfying the localStorage requirement.

### 2. Dynamic Food Detail Routes
**Problem:** Each food item needed its own page (`/menu/:id`) with related dishes.

**Solution:**  
Used React Router’s dynamic segment (`:id`) and looked up the item from the shared `menuItems` array. Related items are filtered by the same category.

### 3. Complex Menu Filtering & Sorting
**Problem:** Menu needed multiple simultaneous filters (category, search, vegetarian, spicy) plus sorting options.

**Solution:**  
Used `useMemo` to compute the filtered list efficiently. All filter state lives in the Menu component; the computation is pure and fast even with 16+ items.

### 4. Cart UX (Drawer + Checkout)
**Problem:** Cart should be accessible from any page without navigating away, and checkout should collect delivery details.

**Solution:**  
Built a slide-over `CartDrawer` controlled by context (`isOpen` / `setIsOpen`). Checkout form is shown inside the same drawer. Orders are saved to localStorage with a unique ID.

### 5. Responsive Design & Mobile Navigation
**Problem:** The site must work well on mobile (hamburger menu, stacked layouts, touch-friendly buttons).

**Solution:**  
- Tailwind responsive utilities (`sm:`, `md:`, `lg:`)
- Collapsible mobile nav in Navbar
- Grid layouts that reflow from 1 → 2 → 3 → 4 columns
- Touch-friendly button sizes and spacing

### 6. Image Loading & Performance
**Problem:** External Unsplash images could slow down initial load.

**Solution:**  
Added `loading="lazy"` on food cards. Used properly sized Unsplash URLs (`w=600&h=400&fit=crop`) to avoid oversized downloads.

### 7. Tailwind CSS v4 Setup
**Problem:** Tailwind v4 uses a new configuration style (`@import "tailwindcss"` + `@theme` instead of the old `tailwind.config.js`).

**Solution:**  
Configured Vite with the official `@tailwindcss/vite` plugin and defined custom colors/fonts inside `index.css` using the `@theme` directive.

### 8. Form Validation & User Feedback
**Problem:** Login/signup and contact forms needed clear error messages and success states.

**Solution:**  
- Client-side validation (password length, match, duplicate email)
- Error banners for auth failures
- Success screens after contact submission and order placement

## Key Design Decisions

| Decision | Reason |
|----------|--------|
| Context + localStorage | No backend required, data persists |
| Single Login page with toggle | Cleaner UX than separate routes |
| Cart as drawer | Always accessible, no route change |
| Shared menu data file | Single source of truth for items & chefs |
| Warm orange primary color | Evokes appetite and restaurant warmth |

## Future Improvements (if backend added)

- Real user authentication (JWT / Firebase)
- Payment gateway integration
- Admin panel for menu management
- Order status tracking with WebSockets
- Image uploads for dishes

---

*This document satisfies the project requirement for a short report explaining problems faced and how they were solved.*
