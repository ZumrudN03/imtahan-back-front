import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import { BasketContext } from '../../Context/basket'
import "./index.scss"
import { Link } from 'react-router-dom'
import { WishlistContext } from '../../Context/wishlist'

function Basket() {
  const {basket,removerBasket,increase,decrese,totalPrice} = useContext(BasketContext)
  const {wishlist,addwishlist} = useContext(WishlistContext)
  return (
    <>
    <Helmet>
        <title>Basket</title>
    </Helmet>

    <div className="basket">
    {basket.map((x) => (
        <div className="basketCard"  key={x._id}>
          <img src={x.image} alt="" />
          <p className="basketCard_title">{x.title}</p>
          <div className="basketCard_prices">
            <button onClick={()=>increase(x)}>+</button>
            <p className="basketCard_price">${(x.price)*(x.count)}</p>
            <button onClick={()=>decrese(x)}>-</button>
            <p className="basketCard_oldPrice">{x.oldPrice}</p>
          </div>
          <p className="basketCard_sale">{x.sale}</p>
          <p className="basketCard_discount">{x.discount}</p>
          <i className={
                wishlist.some((item) => item._id === x._id)
                  ? "fa-solid fa-heart"
                  : "fa-regular fa-heart"
              } onClick={()=>addwishlist(x)}></i>
          <Link to={"/detail/" + x._id}>
              <i className="fa-regular fa-eye"></i>
            </Link>
          <div className="basketCard_hover" onClick={()=>removerBasket(x)}>
            <p className="basket_hover" >Remove</p>
          </div>
        </div>
      ))}
      <p>{totalPrice()}</p>
    </div>
    </>
  )
}

export default Basket