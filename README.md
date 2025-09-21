# E-Commerce Product Listing Page

This project is a **frontend assignment** built with **React + Vite** that recreates a pixel-perfect, responsive product listing screen based on the provided Figma design.  
It demonstrates **clean reusable components**, **filters, sorting, and pagination**, and ensures accessibility and responsiveness across devices.

---

## Goal

Recreate the product listing screen from the Figma with:

- Pixel-accurate UI
- Clean, reusable components
- Fully working filters, sort, and pagination
- Responsive layouts across desktop, tablet, and mobile

---

## Features & Scope

### Reusable Components

- `Navbar`, `Sidebar`, `FilterPanel`, `ProductCard`, `Badge`, `Rating`, `Pagination`, `Footer`
- Configurable via props and styled to match design

### Sidebar Filters (expand/collapse)

- Categories expand/collapse intuitively
- At least 6 items shown (placeholders or “View more” pattern if fewer)

### Product Listing Grid

- Grid layout matches Figma breakpoints and spacing
- Each product card includes:
  - Product image (placeholder if needed)
  - HOT badge
  - Title
  - Original price, discount price, discount percent
  - Rating (stars + count)
  - Quick actions (wishlist/compare if applicable)

### Color Selection

- Color swatches (chips) to filter products
- Selected color highlights product cards with a visible background update

### Sorting & Pagination

- Sort by Name, Price, Popularity (asc/desc)
- Client-side pagination with active page highlighting
- State sync with URL query params (optional)

### Responsiveness

- Desktop, tablet, and mobile layouts tested at `320px`, `768px`, `1024px`
- Sidebar collapses into a drawer on smaller screens

### Footer

- Implemented exactly as in Figma (links, layout, spacing)

---

## Dataset

Located in `src/data/products.json`  
Each product contains:

```json
{
  "id": 1,
  "name": "Urban Explorer Backpack",
  "price": 4999,
  "discountPrice": 3599,
  "discountPercent": 28,
  "ratingValue": 4.4,
  "ratingCount": 130,
  "isHot": true,
  "colors": ["black", "blue", "grey"],
  "category": "Bags",
  "imageUrl": "https://..."
}
```

client/
├── public/ # Static assets (logos, icons, images)
├── src/
│ ├── assets/ # Additional images/assets
│ ├── components/ # Reusable components (Navbar, Sidebar, ProductCard, etc.)
│ ├── data/ # Mock dataset (products.json)
│ ├── hooks/ # Custom hooks (useProducts.js for filtering/sorting/pagination)
│ ├── pages/ # Pages (Products listing page)
│ ├── App.jsx # Root component
│ ├── main.jsx # Entry point
│ ├── index.css # Tailwind & global styles
│ └── App.css # Additional styling

## Tech Stack

# React + Vite (frontend framework & bundler)

# Tailwind CSS (styling)

# Lucide Icons (icons)

# JavaScript (ES6+)

## Setup & Run Instructions

# Clone the repository

git clone (https://github.com/Akhilesh-Kasaudhan/E-Comm)

# Install dependencies

npm install

## Live Demo

Deployed on Netlify:
[Live link](https://e-comm-akhil.netlify.app/)

## Author:

Akhilesh Kasaudhan
