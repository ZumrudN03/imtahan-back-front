import React from "react";
import "./index.scss";
import NewArrivalCards from "../NewArrivalsCards";

function NewArrivalSection() {
  return (
    <div id="newArrivalSection">
      <p className="newArrivalSection_title">New Arrivals</p>
      <div className="line"></div>
      <div className="newArrivalSection_btn">
        <button className="newArrivalSection_btn_allBtn">ALL</button>
        <button>WOMEN'S</button>
        <button>ACCESSORIES</button>
        <button>MEN'S</button>
      </div>
      <NewArrivalCards/>
    </div>
  );
}

export default NewArrivalSection;
