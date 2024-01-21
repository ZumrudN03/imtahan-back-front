import React from 'react'
import { Link} from "react-router-dom";
import "./index.scss"

function Navbar() {
  return (
    <div className='navbar'>
      <p className='navbar_logo'>COLO<span>SHOP</span></p>
      <i className="fa-solid fa-bars"></i>
      <ul>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/addpage"}>Add Page</Link></li>
        <li><Link to={"/wishlist"}>Wishlist</Link></li>
        <li><Link to={"/basket"}>Basket</Link></li>
      </ul>
    </div>
  )
}

export default Navbar