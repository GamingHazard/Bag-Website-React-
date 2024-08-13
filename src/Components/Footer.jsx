import React from "react";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaPinterestSquare,
  FaTiktok,
  FaInstagramSquare,
  FaTelegramPlane,
} from "react-icons/fa";

function Footer() {
  return (
    <div
      className="w3-cell-row w3-mobile"
      style={{
        backgroundColor: "whitesmoke",
        height: "auto",
        paddingBottom: 20,
      }}
    >
      <div className="w3-cell w3-quarter w3-mobile">
        <h3>Useful Links</h3>
        <a
          className="w3-hover-text-blue"
          style={{ textDecoration: "none" }}
          href="#"
        >
          Careers
        </a>
        <br />
        <a
          className="w3-hover-text-blue"
          style={{ textDecoration: "none" }}
          href="#"
        >
          About Us
        </a>
        <br />
        <a
          className="w3-hover-text-blue"
          style={{ textDecoration: "none" }}
          href="#"
        >
          Advertise with us
        </a>
        <br />
        <a
          className="w3-hover-text-blue"
          style={{ textDecoration: "none" }}
          href="#"
        >
          Web Development
        </a>
      </div>
      <div className="w3-cell w3-quarter w3-mobile">
        <h2>Follow us </h2>
        <div
          style={{
            display: "flex",
            padding: 10,
            width: "100%",
            height: "100%",
            justifyContent: "space-evenly",
          }}
        >
          <FaFacebookSquare
            href="#"
            style={{ cursor: "pointer" }}
            className="w3-ripple w3-hover-text-indigo"
            size={30}
            color="black"
          />
          <FaTiktok
            href="#"
            style={{ cursor: "pointer" }}
            className="w3-ripple"
            size={30}
            color="black"
          />
          <FaTwitterSquare
            href="#"
            style={{ cursor: "pointer" }}
            className="w3-ripple w3-hover-text-blue"
            size={30}
            color="black"
          />
          <FaPinterestSquare
            href="#"
            style={{ cursor: "pointer" }}
            className="w3-ripple w3-hover-text-red"
            size={30}
            color="black"
          />
          <FaInstagramSquare
            href="#"
            style={{ cursor: "pointer" }}
            className="w3-ripple w3-hover-text-deep-purple"
            size={30}
            color="black"
          />
          <FaTelegramPlane
            href="#"
            style={{ cursor: "pointer" }}
            className="w3-ripple w3-hover-text-blue"
            size={30}
            color="black"
          />
        </div>
      </div>
      <div className="w3-cell w3-half  w3-mobile">
        <h2>Write to Us</h2>
        <div style={{ display: "flex", marginRight: 20 }} className="w3-right">
          <input
            className="w3-mobile w3-input w3-card"
            placeholder="Enter Message...."
          />
          <div
            className="w3-ripple"
            style={{
              backgroundColor: "lightgrey",
              marginLeft: 16,
              padding: 10,
              cursor: "pointer",
            }}
          >
            Submit
          </div>
        </div>
      </div>

      <p className="w3-margin w3-right">
        A response Email will be sent to you in a few days, thanks
      </p>
    </div>
  );
}

export default Footer;
