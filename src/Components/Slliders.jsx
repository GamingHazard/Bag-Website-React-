import React from "react";
import BagCards from "./BagCards";

function Slliders() {
  const bag1 =
    "https://img.freepik.com/free-vector/vector-big-green-travel-backpack-front-side-view-isolated-white-background_1284-45484.jpg?semt=ais_hybrid";

  const bag2 =
    "https://img.freepik.com/premium-vector/white-brown-backpack-with-brown-strap-that-says-backpack_1161162-595100.jpg?semt=ais_hybrid";

  const bag3 =
    "https://img.freepik.com/premium-vector/backpack-vector-white-background_889056-57525.jpg?semt=ais_hybrid";

  const bag4 =
    "https://img.freepik.com/premium-vector/school-backpack-backpack-with-school-supplies-wooden-table_1278344-1085.jpg?semt=ais_hybrid";

  const bag5 =
    "https://img.freepik.com/premium-vector/backpack-with-blue-backpack-pencils-it_1220218-11605.jpg?semt=ais_hybrid";
  return (
    <div>
      {/* Horizontal Scrollable Container */}
      <div
        className="  w3-mobile"
        style={{
          display: "flex",
          flexDirection: "row",
          overflowX: "auto",
          whiteSpace: "nowrap",
          width: "100%",
          padding: "10px 0", // Added padding to give some space
        }}
      >
        <div style={{ display: "inline-block", width: "auto" }}>
          <BagCards
            BagName="Elegant Handbag"
            BagMaterial="Leather"
            BagColor="Red, Black"
            price="$120"
            BagImg={bag1}
          />
        </div>
        <div style={{ display: "inline-block", width: "auto" }}>
          <BagCards
            BagName="Stylish Backpack"
            BagMaterial="Nylon"
            BagColor="Blue, Green"
            price="$90"
            BagImg={bag2}
          />
        </div>
        <div style={{ display: "inline-block", width: "auto" }}>
          <BagCards
            BagName="Classic Wallet"
            BagMaterial="Leather"
            BagColor="Brown, Black"
            price="$45"
            BagImg={bag3}
          />
        </div>
        <div style={{ display: "inline-block", width: "auto" }}>
          <BagCards
            BagName="Classic Wallet"
            BagMaterial="Leather"
            BagColor="Brown, Black"
            price="$45"
            BagImg={bag4}
          />
        </div>
        <div style={{ display: "inline-block", width: "auto" }}>
          <BagCards
            BagName="Classic Wallet"
            BagMaterial="Leather"
            BagColor="Brown, Black"
            price="$45"
            BagImg={bag5}
          />
        </div>
      </div>
    </div>
  );
}

export default Slliders;
