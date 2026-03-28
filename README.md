# 🍔 Foodie Delight - Advanced Food Delivery Web App

Foodie Delight is a feature-rich, dynamic food ordering web application designed primarily for a Computer Science Final Year Project. It perfectly simulates a full-stack, data-driven application using **Vanilla HTML, CSS, and JavaScript**, relying entirely on the browser's `localStorage` as its database. No external backend dependencies or server setup is required!

## ✨ Key Features

### 🛒 Client-Side (User)
- **Massive Dynamic Menu:** 50 unique items categorized perfectly across Pizzas, Burgers, Sandwiches, Pastas, Beverages, and Sweets.
- **Category Filtering:** Easily sort the menu natively without reloading the page.
- **Cart System:** Add, remove, and update quantities. Includes a beautiful **"Flying Cart"** bezier-curve animation when items are added.
- **Authentication:** Fully functional simulated Registration and Login flow. User sessions are natively managed and restrict checkout access.
- **Custom Indian Rupee Checkout (₹):** Proceed to buy via simulated Credit Card or UPI options.
- **Live Order Tracking:** After checking out, users receive an animated 60-second delivery tracking progress bar in their receipt modal that advances from *Prepared* -> *Out for Delivery* -> *Delivered*.

### 👨‍💻 Administrator Dashboard
- **Role-Based Access Control:** Only users with `isAdmin: true` (e.g., `admin@foodie.com` / `admin123`) can access the `/admin.html` dashboard.
- **Live Order Management:** View massive arrays of user orders and change statuses in real-time.
- **Menu Management (CRUD):** Directly Edit, Delete, or Add new food items to the database from a secure table. Changes instantly reflect on the public menu.

### 🎨 Design & UI
- **Gorgeous Sitewide Dark Mode:** A local-storage-persisted `🌙` toggle securely instantly transforms the entire application's CSS into a cohesive dark theme.
- **Fully Responsive:** Custom layout optimized across Desktop, Tablets, and Mobile screens.

## 🚀 Getting Started

Since the entire application runs natively in the browser, installation is completely effortless:

1. Clone the repository:
   ```bash
   git clone https://github.com/Shailesh1674/basic-food-ordering-app.git
   ```
2. Open `index.html` directly in your favorite modern browser (Chrome, Edge, Firefox, Safari).
3. **That's it!** No `npm install`, no local servers, no databases to spin up.

## 🧪 How to test the Admin Side
To log in as an administrator to edit the menu or view incoming orders:
- **Email:** `admin@foodie.com`
- **Password:** `admin123`

## 🛠 Built With
- **HTML5:** Semantic architecture.
- **Vanilla CSS3:** Custom styling, variables, keyframe animations, flexbox, and grid.
- **Vanilla JavaScript (ES6+):** Business logic, DOM manipulation, authentication states.
- **localStorage:** Robust browser API acting as a persistent JSON Document Database.

## 📝 License
This customized application is intended for educational purposes and final-year academic projects. Feel free to fork, customize, and extend its features!
