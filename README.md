# 🛒 Mini E-Commerce Application (React + Vite)

A simple single-page e-commerce frontend built using **React** and **Vite**, implementing product listing, filtering, sorting, and cart management with clean state handling.

This project was created as part of a frontend assignment to demonstrate **React fundamentals, clean state management, and UI logic correctness**.

---

## 🚀 Live Demo

🔗 **Live URL:** [https://<your-deployed-link-here>]((https://e-commerce-7751.netlify.app))

---

## 🧩 Features

- 📦 Fetch products from public API
- 🔍 Search products by title
- 🗂 Filter products by category
- ↕ Sort products by price (Low → High / High → Low)
- 🛒 Add products to cart
- ➕➖ Update product quantity from cart
- 📉 Real-time stock management
- 🚫 Prevent adding products beyond available stock
- ♻ Restore stock when quantity is reduced or item is removed
- 📌 Sticky cart sidebar for better UX
- 💾 Cart persistence using `localStorage`
- ⚠ Empty state handling (no products / empty cart)

---

## 🛠 Tech Stack

- **React (Functional Components)**
- **Vite**
- **JavaScript (ES6+)**
- **CSS (No UI libraries used)**

---

## 📂 Project Structure
``` text
src/
├── components/
│ ├── ProductCard.jsx
│ ├── ProductList.jsx
│ ├── Filters.jsx
│ ├── Cart.jsx
│ └── EmptyState.jsx
│
├── hooks/
│ └── useCart.js
│
├── App.jsx
├── main.jsx
└── styles.css
```

---

## 🔄 State Management Approach

- **Product State**
  - Maintains product list and available stock
- **Cart State**
  - Managed using `useReducer` inside a custom hook (`useCart`)
- **Stock Synchronization**
  - Adding to cart decreases product stock
  - Reducing quantity restores stock
  - Removing item restores full stock

This separation ensures **consistent UI and predictable behavior**.

---

## 🌐 API Used

- **Fake Store API**
https://fakestoreapi.com/products

---

## Install dependencies

```text
npm install
3️⃣ Run locally (development)
npm run dev
Open: http://localhost:5173
```

### 📦 Production Build

```text
npm run build
This generates a dist/ folder used for deployment.
```

