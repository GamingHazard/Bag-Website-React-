import React from "react";
import "w3-css/w3.css";
import { FaShoppingCart } from "react-icons/fa";
import BagCards from "../Components/BagCards";
import Slliders from "../Components/Slliders";

function Store() {
  return (
    <div className="w3-animate-right w3-mobile">
      {/* Nav Filter */}
      <div
        className="w3-bar w3-cell-row"
        style={{ backgroundColor: "whitesmoke" }}
      >
        <div className="w3-bar-item w3-ripple w3-button">All Bags</div>
        <div className="w3-bar-item w3-ripple w3-button">Bag Packs</div>
        <div className="w3-bar-item w3-ripple w3-button">Hand Bags</div>
        <div className="w3-bar-item w3-ripple w3-button">Wallets</div>
        <div className="w3-bar-item w3-ripple w3-button">Travel Bags</div>
        <div className="w3-bar-item w3-ripple w3-button">Brief Cases</div>

        {/* Shopping Cart ICON */}
        <div className="w3-right" style={{ marginRight: 20, marginTop: 5 }}>
          <FaShoppingCart className="w3-ripple" size={30} color="black" />
          <span
            style={{ marginTop: -10, padding: 3 }}
            className="w3-badge w3-green w3-circle"
          >
            7
          </span>
        </div>
      </div>
      <h2>Bag Packs</h2>
      <Slliders />
      <h2>Hand Bags</h2>
      <Slliders />
    </div>
  );
}

export default Store;
