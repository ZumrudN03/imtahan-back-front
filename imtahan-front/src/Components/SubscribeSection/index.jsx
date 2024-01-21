import React from "react";
import "./index.scss"

function SubscribeSection() {
  return (
    <div className="subscribe_container">
      <div className="subscribeSection">
        <div className="subscribeSection_textBox">
          <h3 className="subscribeSection_textBox_title">Newsletter</h3>
          <p className="subscribeSection_textBox_desc">Subscribe to our newsletter and get 20% off your first purchase</p>
        </div>
        <div className="subscribeSection_input">
          <input type="text" placeholder="Your email" />
          <button>SUBSCRIBE</button>
        </div>
      </div>
    </div>
  );
}

export default SubscribeSection;
