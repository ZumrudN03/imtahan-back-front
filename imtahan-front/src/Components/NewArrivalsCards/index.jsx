import React, { useContext, useEffect, useState } from "react";
import "./index.scss";
import { BasketContext } from "../../Context/basket";
import { Link } from "react-router-dom";
import { WishlistContext } from "../../Context/wishlist";

function NewArrivalCards() {
  const [newCard, setNewCard] = useState([]);
  const { addBasket } = useContext(BasketContext);
  const { wishlist,addwishlist } = useContext(WishlistContext);

  function getFetch() {
    fetch("http://localhost:3100/")
      .then((res) => res.json())
      .then((data) => setNewCard(data));
  }
  useEffect(() => {
    getFetch();
  }, []);

  return (
    <div className="newArrivalCards">
      {newCard.map((x) => (
        <div className="newArrivalCard"  key={x._id}>
          <img src={x.image} alt="" />
          <p className="newArrivalCard_title">{x.title}</p>
          <div className="newArrivalCard_prices">
            <p className="newArrivalCard_price">${x.price}</p>
            <p className="newArrivalCard_oldPrice">{x.oldPrice}</p>
          </div>
          <p className="newArrivalCard_sale">{x.sale}</p>
          <p className="newArrivalCard_discount">{x.discount}</p>
          <div className="newArrivalCard_icon">
            <i
              className={(wishlist.some((item)=>item._id === x._id) ? "fa-solid fa-heart" : "fa-regular fa-heart")}
              onClick={() => addwishlist(x)}
            ></i>
            <Link to={"/detail/" + x._id}>
              <i className="fa-regular fa-eye"></i>
            </Link>
          </div>
          <div className="newArrivalCard_hover" onClick={() => addBasket(x)}>
            <p className="basket_hover">ADD TO CART</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NewArrivalCards;
