import React, { useState } from "react";
import "w3-css/w3.css";

export function Register() {
  const [isRegister, setIsRegister] = useState(true);

  const handleToggle = () => {
    setIsRegister(!isRegister);
  };

  return (
    <div
      className="w3-mobile w3-padding w3-cell-row w3-container w3-animate-right"
      style={{ width: "100%" }}
    >
      <div
        className="w3-cell w3-mobile w3-padding w3-card w3-hide-small"
        style={{
          height: 500,
          width: 500,
          backgroundColor: "black",
          borderTopRightRadius: 30,
          borderBottomRightRadius: 30,
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontWeight: "bold", color: "white" }}>Bags</h1>

        <p style={{ color: "white" }}>
          Creating an account or Logging in to your account will add more
          features like: <br />
          <ul>You will be able to file Complaints</ul>
          <ul>Contact customer care service</ul>
          <ul>Let you save / bookmark products</ul>
        </p>
      </div>
      <div
        className="w3-cell w3-mobile w3-center w3-padding"
        style={{ height: 500, width: 500, backgroundColor: "white" }}
      >
        {isRegister ? (
          <form className="w3-animate-left">
            <p>Create Account</p>

            <input
              className="w3-input w3-card w3-margin"
              style={{ borderRadius: 10, border: 0 }}
              type="text"
              placeholder="Enter Name"
            />
            <input
              className="w3-input w3-card w3-margin"
              style={{ borderRadius: 10, border: 0 }}
              type="text"
              placeholder="Enter email"
            />
            <input
              className="w3-input w3-card w3-margin"
              style={{ borderRadius: 10, border: 0 }}
              type="text"
              placeholder="Enter Tel number 07..."
            />
            <input
              className="w3-input w3-card w3-margin"
              style={{ borderRadius: 10, border: 0 }}
              type="password"
              placeholder="Create password"
            />
            <input
              className="w3-input w3-card w3-margin"
              style={{ borderRadius: 10, border: 0 }}
              type="password"
              placeholder="Confirm password"
            />

            <div
              className="w3-ripple w3-mobile w3-round-medium w3-btn"
              style={{
                marginTop: 30,
                width: 400,
                backgroundColor: "whitesmoke",
                alignSelf: "center",
                textAlign: "center",
              }}
            >
              <p>Create</p>
            </div>
            <p>
              Already have an account?{" "}
              <a
                className="w3-hover-text-blue w3-ripple"
                style={{
                  cursor: "pointer",
                  fontWeight: "bold",
                  marginLeft: 10,
                }}
                onClick={handleToggle}
              >
                Login
              </a>
            </p>
          </form>
        ) : (
          <form className="w3-animate-right">
            <p>Login</p>

            <input
              className="w3-input w3-card w3-margin"
              style={{ borderRadius: 10, border: 0 }}
              type="text"
              placeholder="Enter email / Number..."
            />
            <input
              className="w3-input w3-card w3-margin"
              style={{ borderRadius: 10, border: 0 }}
              type="password"
              placeholder="Enter password"
            />

            <div
              className="w3-ripple w3-mobile w3-round-medium w3-btn"
              style={{
                marginTop: 30,
                width: 400,
                backgroundColor: "whitesmoke",
                alignSelf: "center",
                textAlign: "center",
              }}
            >
              <p>Login</p>
            </div>
            <p>
              Don't have an account?{" "}
              <a
                className="w3-hover-text-blue w3-ripple"
                style={{
                  cursor: "pointer",
                  fontWeight: "bold",
                  marginLeft: 10,
                }}
                onClick={handleToggle}
              >
                Sign Up
              </a>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
