import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { WishlistContext } from "../../Context/wishlist";
import "./index.scss";
import { BasketContext } from "../../Context/basket";
import { Link } from "react-router-dom";

function Wishlist() {
  const { wishlist, removerwishlist } = useContext(WishlistContext);
  const {addBasket} = useContext(BasketContext)
  return (
    <>
      <Helmet>
        <title>Wishlist</title>
      </Helmet>
      <div className="wishlist">
        {wishlist.map((x) => (
          <div className="wishlistCard"  key={x._id}>
            <img src={x.image} alt="" />
            <p className="wishlistCard_title">{x.title}</p>
            <div className="wishlistCard_prices">
              <p className="wishlistCard_price">${x.price}</p>
              <p className="wishlistCard_oldPrice">{x.oldPrice}</p>
            </div>
            <p className="wishlistCard_sale">{x.sale}</p>
            <p className="wishlistCard_discount">{x.discount}</p>
            <i
              className={
                wishlist.some((item) => item._id === x._id)
                  ? "fa-solid fa-heart"
                  : "fa-regular fa-heart"
              }
              onClick={() => removerwishlist(x)}
            ></i>
            <div
              className="wishlistCard_hover"
              onClick={() => addBasket(x)}
            >
              <p className="wishlist_hover">ADD TO CART</p>
            </div>
            <Link to={"/detail/" + x._id}>
              <i className="fa-regular fa-eye"></i>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default Wishlist;
