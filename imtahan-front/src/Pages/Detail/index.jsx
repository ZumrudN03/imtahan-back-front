import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { BasketContext } from "../../Context/basket";
import { useParams } from "react-router-dom";
import "./index.scss";
import { WishlistContext } from "../../Context/wishlist";

function Detail() {
  const { id } = useParams();
  const [detail, setdetail] = useState([]);
  const { addBasket } = useContext(BasketContext);
  const { wishlist, addwishlist } = useContext(WishlistContext);

  function getFetch() {
    fetch("http://localhost:3100/" + id)
      .then((res) => res.json())
      .then((data) => setdetail(data));
  }
  useEffect(() => {
    getFetch();
  }, []);

  return (
    <>
      <Helmet>
        <title>Detail</title>
      </Helmet>
      <div className="detail">
        <div className="detailCard">
          <img src={detail.image} alt="" />
          <p className="detailCard_title">{detail.title}</p>
          <div className="detailCard_prices">
            <p className="detailCard_price">${detail.price}</p>
            <p className="detailCard_oldPrice">{detail.oldPrice}</p>
          </div>
          <p className="detailCard_sale">{detail.sale}</p>
          <p className="detailCard_discount">{detail.discount}</p>
          <div className="detailCard_icon">
            <i
              className={
                wishlist.some((item) => item._id === detail._id)
                  ? "fa-solid fa-heart"
                  : "fa-regular fa-heart"
              }
            ></i>
          </div>
          <div className="detailCard_hover" onClick={() => addBasket(detail)}>
            <p className="basket_hover">ADD TO CART</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
