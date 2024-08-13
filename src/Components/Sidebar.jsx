import React from "react";
import "w3-css/w3.css";
import { FaTrash, FaTimesCircle, FaTimes } from "react-icons/fa";

function Sidebar({ isVisible, onClose }) {
  return (
    <div
      className={`w3-sidebar w3-bar-block w3-card w3-right w3-animate-left ${
        isVisible ? "w3-show" : "w3-hide"
      }`}
      style={{
        width: 500,
        backgroundColor: "#f4f4f4",

        textAlign: "center",
        paddingBottom: 100,
      }}
    >
      <FaTimesCircle
        onClick={onClose}
        className="w3-ripple w3-hover-text-red w3-right"
        size={30}
        color="black"
      />

      <h3>Selected Items</h3>
      {/* Add sidebar content here */}
      <div style={{ overflow: "auto" }}>
        {/* Tab */}
        <div
          style={{
            width: "100%",
            height: 200,
            backgroundColor: "white",
            marginTop: 10,
            marginBottom: 10,
          }}
          className="w3-card w3-white w3-mobile w3-cell-row "
        >
          <div className="w3-cell " style={{ width: 200, padding: 5 }}>
            <img
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 10,
                marginTop: -50,
              }}
              src="https://img.freepik.com/premium-vector/bag-vector-store-sale-retail-isolated-market-paper-buy-shop-handle-package-gift-design_1013341-2566.jpg?w=740"
            />
          </div>
          <div className="w3-cell">
            <input
              className="w3-input w3-round-medium"
              style={{ margin: 10, width: 290 }}
              placeholder="Pcs..."
            />
            <input
              className="w3-input w3-round-medium"
              style={{ margin: 10, width: 290 }}
              placeholder="colors..."
            />
            <input type="button" value="Order" />
            <div style={{ paddingTop: 20 }}>
              <FaTrash
                className="w3-ripple w3-hover-text-red w3-right w3-margin"
                size={20}
                color="black"
              />
            </div>
          </div>
        </div>
        {/* Tab */}
        <div
          style={{
            width: "100%",
            height: 200,
            backgroundColor: "white",
            marginTop: 10,
            marginBottom: 10,
          }}
          className="w3-card w3-white w3-mobile w3-cell-row "
        >
          <div className="w3-cell " style={{ width: 200, padding: 5 }}>
            <img
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 10,
                marginTop: -50,
              }}
              src="https://img.freepik.com/premium-vector/school-backpack-backpack-with-school-supplies-wooden-table_1278344-1085.jpg?semt=ais_hybrid"
            />
          </div>
          <div className="w3-cell">
            <input
              className="w3-input w3-round-medium"
              style={{ margin: 10, width: 290 }}
              placeholder="Pcs..."
            />
            <input
              className="w3-input w3-round-medium"
              style={{ margin: 10, width: 290 }}
              placeholder="colors..."
            />
            <input type="button" value="Order" />
            <div style={{ paddingTop: 20 }}>
              <FaTrash
                className="w3-ripple w3-hover-text-red w3-right w3-margin"
                size={20}
                color="black"
              />
            </div>
          </div>
        </div>
        {/* Tab */}
        <div
          style={{
            width: "100%",
            height: 200,
            backgroundColor: "white",
            marginTop: 10,
            marginBottom: 10,
          }}
          className="w3-card w3-white w3-mobile w3-cell-row "
        >
          <div className="w3-cell " style={{ width: 200, padding: 5 }}>
            <img
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 10,
                marginTop: -50,
              }}
              src="https://img.freepik.com/free-vector/vector-big-green-travel-backpack-front-side-view-isolated-white-background_1284-45484.jpg?semt=ais_hybrid"
            />
          </div>
          <div className="w3-cell">
            <input
              className="w3-input w3-round-medium"
              style={{ margin: 10, width: 290 }}
              placeholder="Pcs..."
            />
            <input
              className="w3-input w3-round-medium"
              style={{ margin: 10, width: 290 }}
              placeholder="colors..."
            />
            <input type="button" value="Order" />
            <div style={{ paddingTop: 20 }}>
              <FaTrash
                className="w3-ripple w3-hover-text-red w3-right w3-margin"
                size={20}
                color="black"
              />
            </div>
          </div>
        </div>
        {/* Tab */}
        <div
          style={{
            width: "100%",
            height: 200,
            backgroundColor: "white",
            marginTop: 10,
            marginBottom: 10,
          }}
          className="w3-card w3-white w3-mobile w3-cell-row "
        >
          <div className="w3-cell " style={{ width: 200, padding: 5 }}>
            <img
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 10,
                marginTop: -50,
              }}
              src="https://img.freepik.com/free-vector/vector-black-brief-case-with-leather_1284-41927.jpg?semt=ais_hybrid"
            />
          </div>
          <div className="w3-cell">
            <input
              className="w3-input w3-round-medium"
              style={{ margin: 10, width: 290 }}
              placeholder="Pcs..."
            />
            <input
              className="w3-input w3-round-medium"
              style={{ margin: 10, width: 290 }}
              placeholder="colors..."
            />
            <input type="button" value="Order" />
            <div style={{ paddingTop: 20 }}>
              <FaTrash
                className="w3-ripple w3-hover-text-red w3-right w3-margin"
                size={20}
                color="black"
              />
            </div>
          </div>
        </div>
        {/* Tab */}
        <div
          style={{
            width: "100%",
            height: 200,
            backgroundColor: "white",
            marginTop: 10,
            marginBottom: 10,
          }}
          className="w3-card w3-white w3-mobile w3-cell-row "
        >
          <div className="w3-cell " style={{ width: 200, padding: 5 }}>
            <img
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 10,
                marginTop: -50,
              }}
              src="https://img.freepik.com/premium-vector/backpack-vector-white-background_889056-57525.jpg?semt=ais_hybrid"
            />
          </div>
          <div className="w3-cell">
            <input
              className="w3-input w3-round-medium"
              style={{ margin: 10, width: 290 }}
              placeholder="Pcs..."
            />
            <input
              className="w3-input w3-round-medium"
              style={{ margin: 10, width: 290 }}
              placeholder="colors..."
            />
            <input type="button" value="Order" />
            <div style={{ paddingTop: 20 }}>
              <FaTrash
                className="w3-ripple w3-hover-text-red w3-right w3-margin"
                size={20}
                color="black"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
