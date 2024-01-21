import React, { createContext } from "react";
import useLocalStrg from "../Hook/useLocalStrg";

export const WishlistContext = createContext();

function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useLocalStrg("wishlist", []);

  function addwishlist(item) {
    const index = wishlist.findIndex((x) => x._id === item._id);
    if (index === -1) {
      setWishlist([...wishlist, item]);
    } else {
      removerwishlist();
    }
  }

  function removerwishlist(item) {
    setWishlist(wishlist.filter((x) => x._id !== item._id));
  }

  const data = {
    wishlist,
    addwishlist,
    removerwishlist,
  };
  return (
    <WishlistContext.Provider value={data}>{children}</WishlistContext.Provider>
  );
}

export default WishlistProvider;
