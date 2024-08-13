import React, { useState } from "react";
import "w3-css/w3.css";
import { FaPlus, FaMinus } from "react-icons/fa";

function BagCards({ imgStyle, BagName, BagMaterial, BagColor, price, BagImg }) {
  const [isAdded, setIsAdded] = useState(false);

  const handleToggle = () => {
    setIsAdded(!isAdded);
  };

  return (
    <div
      className="w3-card w3-margin w3-animate-right w3-mobile w3-round-medium w3-ripple w3-hover-opacity"
      style={{
        width: 400,
        height: 400,
        backgroundColor: "lightcoral",
        cursor: "pointer",
      }}
    >
      <img
        style={{ width: "100%", height: 300 }}
        src={BagImg}
        alt="bag error"
      />

      <div
        style={{
          width: "100%",
          height: 100,
          backgroundColor: "whitesmoke",
          padding: 10,
        }}
      >
        <span>
          <b>Name of Bag :</b>
          <span style={{ color: "black" }}>{BagName}</span>
        </span>
        <br />
        <span>
          <b>Bag Material :</b>
          <span style={{ color: "black" }}> {BagMaterial}</span>
        </span>
        <br />
        <span>
          <b>Available Colors :</b>
          <span style={{ color: "black" }}> {BagColor}</span>
        </span>
        <br />
        <span>
          <b>Price :</b>
          <span style={{ color: "black" }}>{price} </span>
          <span
            className="w3-right"
            onClick={handleToggle} // Add toggle function here
            style={{ cursor: "pointer" }}
          >
            {isAdded ? "Remove" : "Add"}
            {isAdded ? (
              <FaMinus
                style={{ marginLeft: 8 }}
                className="w3-ripple w3-right"
                size={20}
                color="black"
              />
            ) : (
              <FaPlus
                style={{ marginLeft: 8 }}
                className="w3-ripple w3-right"
                size={20}
                color="black"
              />
            )}
          </span>
        </span>
      </div>
    </div>
  );
}

export default BagCards;
