import React, { useState, useEffect } from "react"; // Import useEffect and useState
import { Link, useLocation } from "react-router-dom";
import "w3-css/w3.css";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("");
  const location = useLocation();

  // Set the active link based on the current URL path
  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  const linkStyle = (path) => ({
    marginRight: 16,
    textDecoration: activeLink === path ? "underline" : "none",

    color: activeLink === path ? "blue" : "white",
  });

  return (
    <div
      style={{ width: "100%" }}
      className="w3-mobile w3-bar w3-black w3-padding"
    >
      <div className="w3-mobile w3-bar-item">
        <h1>BAGS</h1>
      </div>
      <div
        className="w3-right w3-hide-small w3-bar-item"
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          padding: 10,
          marginTop: 30,
        }}
      >
        <Link style={linkStyle("/")} to="/">
          Home
        </Link>

        <Link style={linkStyle("/login")} to="/login">
          Login
        </Link>
        <Link style={linkStyle("/store")} to="/store">
          Store
        </Link>
        <Link style={linkStyle("/dashboard")} to="/dashboard">
          Dashboard
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
