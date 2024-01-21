import React, { useContext, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "./index.scss";
import { BasketContext } from "../../Context/basket";
import { Link } from "react-router-dom";
import { WishlistContext } from "../../Context/wishlist";

function BestSellerSection() {
  const [newCard, setNewCard] = useState([]);
  const { addBasket } = useContext(BasketContext);
  const { wishlist, addwishlist } = useContext(WishlistContext);

  function getFetch() {
    fetch("http://localhost:3100/")
      .then((res) => res.json())
      .then((data) => setNewCard(data));
  }
  useEffect(() => {
    getFetch();
  }, []);

  return (
    <>
      <div className="bestSellerSection_header">
        <p className="bestSellerSection_header_title">Best Sellers</p>
        <div className="line"></div>
      </div>
      <div className="slider">
        <Swiper
          slidesPerView={5}
          centeredSlides={true}
          grabCursor={true}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {newCard.map((x) => (
            <SwiperSlide className="sliderCards">
              <div className="sliderCard" key={x._id}>
                <img src={x.image} alt="" />
                <p className="sliderCard_title">{x.title}</p>
                <div className="sliderCard_prices">
                  <p className="sliderCard_price">${x.price}</p>
                  <p className="sliderCard_oldPrice">{x.oldPrice}</p>
                </div>
                <p className="sliderCard_sale">{x.sale}</p>
                <p className="sliderCard_discount">{x.discount}</p>
                <div className="sliderCard_icon">
                  <i
                    className={
                      wishlist.some((item) => item._id === x._id)
                        ? "fa-solid fa-heart"
                        : "fa-regular fa-heart"
                    }
                    onClick={() => addwishlist(x)}
                  ></i>
                  <Link to={"/detail/" + x._id}>
                    <i className="fa-regular fa-eye"></i>
                  </Link>
                </div>
                <div className="sliderCard_hover" onClick={() => addBasket(x)}>
                  <p className="basket_hover">ADD TO CART</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default BestSellerSection;
