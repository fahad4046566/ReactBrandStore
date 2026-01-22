import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { AppProvider } from "./components/context/ProductContext.jsx";
import { FilterContextProvider } from "./components/context/FilterContext.jsx";
import { CartContextProvider } from "./components/context/CartContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <AppProvider>
        <FilterContextProvider>
          <CartContextProvider>
            <App />
          </CartContextProvider>
        </FilterContextProvider>
      </AppProvider>
    </Router>
  </StrictMode>,
);
