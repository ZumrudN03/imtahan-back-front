import React from "react";
import "./index.scss";

function Footer() {
  return (
    <div className="footer_container">
      <div className="footer">
        <div className="footer_textBox">
          <p>Blog</p>
          <p>FAQs</p>
          <p>Contact Us</p>
        </div>
        <ul>
          <li>
            <i class="fa-brands fa-facebook-f"></i>
          </li>
          <li>
            <i class="fa-brands fa-twitter"></i>
          </li>
          <li>
            <i class="fa-brands fa-instagram"></i>
          </li>
          <li>
            <i class="fa-brands fa-skype"></i>
          </li>
          <li>
            <i class="fa-brands fa-pinterest"></i>
          </li>
        </ul>
      </div>
      <div className="footer_underside">
        <p>©2018 All Rights Reserverd. This template is made with <i className="fa-regular fa-heart"></i> by <span>Colorlib</span></p>
      </div>
    </div>
  );
}

export default Footer;
