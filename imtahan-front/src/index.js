import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HelmetProvider } from "react-helmet-async";
import BasketProvider from "./Context/basket";
import WishlistProvider from "./Context/wishlist";
import SarchProvider from "./Context/search";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <SarchProvider>
        <BasketProvider>
          <WishlistProvider>
            <App />
          </WishlistProvider>
        </BasketProvider>
      </SarchProvider>
    </HelmetProvider>
  </React.StrictMode>
);
