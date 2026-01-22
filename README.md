### Pro-Store: A Modern React E-Commerce Suite
I built this project to master the art of State Management and Logic-Driven UI. It’s not just a store; it’s a fully functional system that handles data flow, filtering, and persistent shopping experiences.

## The Development Journey
1. Structure & Routing
I started by architecting the app using react-router-dom. I mapped out the entire user journey—from the landing page to the detailed product views and the final checkout cart—ensuring a seamless SPA (Single Page Application) experience.

2. State Management (The Brain)
To avoid "Prop Drilling," I implemented Context API paired with the useReducer hook. This allowed me to centralize the logic for:

ProductContext: Handling API calls via Axios and managing loading/error states.

FilterContext: A dedicated hub for sorting and multi-category filtering.

CartContext: Managing the complex logic of additions, removals, and persistent storage.

3. Advanced Filtering Logic
One of the biggest challenges was creating a smooth filtering system. I wrote custom logic to filter products by:

Text Search: Real-time search as you type.

Categories & Brands: Dynamic unique data extraction from the API.

Price Range: Interactive slider with auto-calculating min/max values.

4. The "Living" Cart
The cart is where the logic truly comes alive. I implemented:

Local Storage Sync: Ensuring user data stays safe even after a page refresh.

Smart Quantities: Handling stock limits and preventing logic crashes during increments.

Dynamic Billing: Using the .reduce() method to calculate subtotals and shipping fees in real-time.

5. Mobile-First Responsiveness
I didn't just stop at desktop. I restructured the grid systems into a card-based layout for mobile users, ensuring that the shopping experience is just as good on a 6-inch screen as it is on a 24-inch monitor.

## Built With
React.js (Hooks & Context)

Tailwind CSS (Custom Styling)

Axios (API Management)

Vite (Development Server)

Why this project?
This project represents 8 days of intense coding (Started: Jan 14, 2026). It shows my ability to take a complex requirement, break it down into steps, and solve real-world problems like NaN errors, state syncing, and responsive UI bugs.


