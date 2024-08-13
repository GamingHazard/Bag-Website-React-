import React from "react";
import "w3-css/w3.css";

import NavBar from "./Components/NavBar";
import Navigation from "./Components/Navigation";

function App() {
  return (
    <div className="w3-mobile" style={{ flex: 1 }}>
      {/* <NavBar /> */}
      <Navigation />
    </div>
  );
}

export default App;
