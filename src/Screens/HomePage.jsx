import React from "react";
import "w3-css/w3.css";
import pic from "../profile.jpg";
import { Link, useLocation } from "react-router-dom";

import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaPinterestSquare,
  FaTiktok,
  FaInstagramSquare,
  FaTelegramPlane,
} from "react-icons/fa";

function HomePage() {
  const url =
    "https://img.freepik.com/premium-vector/vector-blue-brown-camping-backpack-flat-cartoon-style-vector-illustration-retro-brie_994744-20774.jpg?w=740";

  const url2 =
    "https://img.freepik.com/premium-vector/colorful-display-different-handbags-with-colorful-background_1120554-16132.jpg?semt=ais_hybrid";
  const url3 =
    "https://img.freepik.com/premium-vector/vector-blue-brown-camping-backpack-flat-cartoon-style-vector-illustration-retro-brie_994744-20770.jpg?semt=ais_hybrid";
  const bagpack =
    "https://img.freepik.com/premium-vector/backpack-sits-wooden-table-forest_1278344-1328.jpg";
  const handbag =
    "https://img.freepik.com/premium-vector/bag-vector-store-sale-retail-isolated-market-paper-buy-shop-handle-package-gift-design_1013341-2566.jpg?w=740";
  const handbag2 =
    "https://img.freepik.com/premium-vector/blue-leather-python-womens-handbag-blue-fashionable-female-bag-bright-background_1021328-3617.jpg?semt=ais_hybrid";
  const purses =
    "https://img.freepik.com/premium-vector/women-handbags-collection-fashionable-items-isolated-icons-set-vector-bags-with-zippers_135595-725.jpg?semt=ais_hybrid";
  const wallet =
    "https://img.freepik.com/premium-vector/wallet-icon-vector-set-white-background-isolated_873925-1497333.jpg?semt=ais_hybrid";
  const travelbag =
    "https://img.freepik.com/premium-vector/modern-large-leather-bag-travel-closeup-white-background_1250153-7154.jpg?semt=ais_hybrid";
  const travelbag2 =
    "https://img.freepik.com/premium-vector/brown-white-bag-with-brown-leather-strap_858664-24917.jpg?semt=ais_hybrid";
  const briefcase =
    "https://img.freepik.com/free-vector/vector-black-brief-case-with-leather_1284-41927.jpg?semt=ais_hybrid";

  return (
    <div className="w3-mobile w3-animate-left" style={{ textAlign: "center" }}>
      <div
        className="w3-mobile  "
        style={{
          width: "100%",
          height: 550,
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0,2), rgba(0, 0, 0,0.5)), url(${url3})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: 20,
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
        }}
      >
        <div
          className="w3-center"
          style={{
            // backgroundColor: "lightblue",        400ight: 300,
            padding: 16,
            width: 600,
            textAlign: "center",
            paddingTop: 40,
          }}
        >
          <h2 style={{ color: "white", margin: 0 }}>
            Looking for high quality bags at low prices!
          </h2>
          <p style={{ color: "white", marginTop: 10 }}>We got you buddy 😉👌</p>
          <Link style={{ textDecoration: "none" }} to="/store">
            <p
              className="w3-ripple"
              style={{
                color: "black",
                marginTop: 30,
                backgroundColor: "white",
                padding: 10,
                borderRadius: 10,
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              Store
            </p>
          </Link>
        </div>
      </div>

      {/* BagPack */}
      <div
        className="w3-cell-row w3-margin"
        style={{ width: "100%", height: "auto" }}
      >
        <div
          className="w3-mobile w3-twothird w3-cell    w3-center"
          style={{ backgroundColor: "white", maxHeight: "auto" }}
        >
          <h2 style={{ fontWeight: "bold" }}>Bag Packs</h2>
          <div
            style={{
              // backgroundColor: "lightblue",
              width: "100%",
              height: "auto",
              padding: 16,
            }}
          >
            <p style={{ fontFamily: "sans-serif" }}>
              <h3>
                Experience the Premium Quality of Our Japanese-Imported
                Backpacks!
              </h3>
              <br /> At Bags, we offer top-tier backpacks directly imported from
              Japan, renowned for their exceptional craftsmanship and
              durability. Whether you need a school backpack, a travel
              companion, or a stylish everyday accessory, our collection has it
              all. Our Range Includes: <br />
              <b> School Backpacks:</b> for Study and spacious for daily use,
              <b>Travel Backpacks:</b> for Secure and weather resistant for your
              adventures,<b> Laptop Backpacks:</b> that are Sleek, padded, and
              tech friendly. <b>Hiking Backpacks:</b> built for comfort on
              rugged terrains, <b>Casual Backpacks:</b> that are trendy and
              versatile for on the go lifestyles,<b> Designer Backpacks:</b>{" "}
              where Luxury meets practicality.
              <br /> <br /> Each backpack is a blend of quality, style, and
              functionality, making it a reliable companion for any occasion.
              This version is more concise while still highlighting the key
              points.
            </p>
          </div>
        </div>
        <div
          className="w3-mobile w3-third w3-cell w3-center"
          style={{ backgroundColor: "lightblue", height: "auto" }}
        >
          <img
            className="w3-image"
            style={{ width: "100%", height: "100%" }}
            src={bagpack}
            alt="BagPack"
          />
        </div>
      </div>

      {/* HandBag */}
      <div
        className="w3-cell-row w3-margin"
        style={{ width: "100%", height: 400 }}
      >
        <div
          className="w3-mobile w3-third w3-cell w3-center"
          style={{ backgroundColor: "lightblue", height: "auto" }}
        >
          <img
            className="w3-image"
            style={{ width: "100%", height: "100%" }}
            src={handbag2}
            alt="Handbag"
          />
        </div>
        <div
          className="w3-mobile w3-twothird w3-cell    w3-center"
          style={{ backgroundColor: "white", maxHeight: "auto" }}
        >
          <h2 style={{ fontWeight: "bold" }}>Hand Bags</h2>
          <div
            style={{
              // backgroundColor: "lightblue",
              width: "100%",
              height: "auto",
              padding: 16,
            }}
          >
            <p style={{ fontFamily: "sans-serif" }}>
              <h3> Elevate Your Style with Our Japanese-Imported Handbags!</h3>
              <br />
              Discover the elegance and quality of our handbags, directly
              imported from Japan. Each piece is a testament to meticulous
              craftsmanship, combining luxury with functionality to complement
              your unique style.
              <br /> Explore Our Collection: <b>Tote Bags</b>: Spacious and
              versatile, perfect for everyday essentials,<b>Crossbody Bags</b>:
              Compact and convenient, ideal for handfree comfort.
              <b>Clutch Bags</b>: Sleek and stylish, designed for your evening
              outings. <b>Satchels</b>: Structured and sophisticated, suitable
              for work or leisure.<b>Shoulder Bags</b>: Effortlessly chic,
              offering both style and convenience. <br /> <br /> Our handbags
              are crafted with premium materials and attention to detail,
              ensuring you carry more than just a bag you carry a piece of art.
              This version is tailored to highlight the variety and quality of
              handbags you offer.
            </p>
          </div>
        </div>
      </div>

      {/* Purses */}
      <div
        className="w3-cell-row w3-margin"
        style={{ width: "100%", height: 400 }}
      >
        <div
          className="w3-mobile w3-twothird w3-cell    w3-center"
          style={{ backgroundColor: "white", maxHeight: "auto" }}
        >
          <h2 style={{ fontWeight: "bold" }}>Purses</h2>
          <div
            style={{
              // backgroundColor: "lightblue",
              width: "100%",
              height: "auto",
              padding: 16,
            }}
          >
            <p style={{ fontFamily: "sans-serif" }}>
              <h3>
                Discover the Art of Elegance with Our JapanesImported Purses!
              </h3>
              At <b>Bags</b>, we bring you exquisite purses directly imported
              from Japan, where style meets superior craftsmanship. Designed
              with attention to detail, our purses are the perfect blend of
              fashion and functionality.
              <br /> Our Collection Includes:<b> Coin Purses:</b> Compact and
              cute, ideal for your loose change and small essentials.
              <b>Clutch Purses:</b> Elegant and refined, perfect for special
              occasions. <b>Wallet Purses:</b> Sleek and organized, offering
              multiple compartments for cards and cash. <b>Wristlet Purses:</b>
              Stylish and practical, giving you the convenience of handfree
              carrying.<b> Mini Purses:</b> Petite and trendy, perfect for when
              you need just the essentials. <br />
              Each purse is crafted from higquality materials, ensuring
              durability and timeless appeal. Carry a piece of Japanese elegance
              wherever you go. This version is designed to succinctly convey the
              elegance and variety of purses in your collection.
            </p>
          </div>
        </div>
        <div
          className="w3-mobile w3-third w3-cell w3-center"
          style={{ backgroundColor: "lightblue", height: "auto" }}
        >
          <img
            className="w3-image"
            style={{ width: "100%", height: "100%" }}
            src={purses}
            alt="Purses"
          />
        </div>
      </div>

      {/* Wallets */}
      <div
        className="w3-cell-row w3-margin"
        style={{ width: "100%", height: 400 }}
      >
        <div
          className="w3-mobile w3-third w3-cell w3-center"
          style={{ backgroundColor: "lightblue", height: "auto" }}
        >
          <img
            className="w3-image"
            style={{ width: "100%", height: "100%" }}
            src={wallet}
            alt="Wallets"
          />
        </div>
        <div
          className="w3-mobile w3-twothird w3-cell    w3-center"
          style={{ backgroundColor: "white", maxHeight: "auto" }}
        >
          <h2 style={{ fontWeight: "bold" }}>Wallets</h2>
          <div
            style={{
              // backgroundColor: "lightblue",
              width: "100%",
              height: "auto",
              padding: 16,
            }}
          >
            <p style={{ fontFamily: "sans-serif" }}>
              <h3>
                Experience Superior Craftsmanship with Our Japanese Imported
                Wallets!
              </h3>
              Upgrade your everyday essentials with our premium wallets,
              directly imported from Japan. Each wallet is crafted with
              precision and care, ensuring both style and durability. <br />
              Our Wallet Collection Features: <b>Bifold Wallets:</b> Classic and
              compact, perfect for everyday use. <b>Trifold Wallets:</b> Extra
              storage with a sleek design, ideal for those who carry more.
              Cardholders: <b>Slim and stylish:</b> designed to keep your cards
              organized. <b>Coin Wallets:</b> Handy and secure, perfect for
              carrying loose change. <b>Zipper Wallets:</b> Secure and spacious,
              offering extra protection for your belongings.
              <br /> Our wallets are made from high quality materials and
              designed for those who appreciate the finer things in life.
              Elevate your daily routine with a wallet that blends functionality
              with timeless elegance. This text emphasizes the quality and
              variety of wallets in your collection, appealing to customers
              looking for both practicality and style.
            </p>
          </div>
        </div>
      </div>

      {/* Travelbag */}
      <div
        className="w3-cell-row w3-margin"
        style={{ width: "100%", height: 400 }}
      >
        <div
          className="w3-mobile w3-twothird w3-cell    w3-center"
          style={{ backgroundColor: "white", maxHeight: "auto" }}
        >
          <h2 style={{ fontWeight: "bold" }}>Travel Bags</h2>
          <div
            style={{
              // backgroundColor: "lightblue",
              width: "100%",
              height: "auto",
              padding: 16,
            }}
          >
            <p style={{ fontFamily: "sans-serif" }}>
              <h3>
                Discover the Excellence of Our Japanese Imported Travel Bags!
              </h3>
              Elevate your travel experience with our top quality travel bags,
              imported from Japan. Designed for durability and style, each bag
              ensures your adventures are both organized and effortless.
              <br /> Explore Our Travel Bag Collection:
              <b>Rolling Duffel Bags:</b> Spacious and easy to maneuver, perfect
              for longer trips. <b>Weekender Bags:</b> Stylish and compact,
              ideal for short getaways. <b>Carry On Bags:</b> Convenient and
              airline friendly, designed for hassle free travel.
              <b>Backpacks:</b> Versatile and comfortable, great for on the go
              adventures. <b>Travel Totes:</b> Sleek and practical, offering
              extra storage for all your essentials. <br />
              Crafted with high grade materials and innovative design, our
              travel bags are built to withstand the rigors of travel while
              keeping you looking stylish. Start your journey with a bag that
              combines functionality with refined Japanese craftsmanship. This
              version highlights the range and quality of travel bags, focusing
              on their practicality and stylish design.
            </p>
          </div>
        </div>
        <div
          className="w3-mobile w3-third w3-cell w3-center"
          style={{ backgroundColor: "lightblue", height: "auto" }}
        >
          <img
            className="w3-image"
            style={{ width: "100%", height: "100%" }}
            src={travelbag}
            alt="Travelbag"
          />
        </div>
      </div>

      {/* Briefcase */}
      <div
        className="w3-cell-row w3-margin"
        style={{ width: "100%", height: 400 }}
      >
        <div
          className="w3-mobile w3-third w3-cell w3-center"
          style={{ backgroundColor: "lightblue", height: "auto" }}
        >
          <img
            className="w3-image"
            style={{ width: "100%", height: "100%" }}
            src={briefcase}
            alt="Briefcase"
          />
        </div>
        <div
          className="w3-mobile w3-twothird w3-cell    w3-center"
          style={{ backgroundColor: "white", maxHeight: "auto" }}
        >
          <h2 style={{ fontWeight: "bold" }}>Brief Cases</h2>
          <div
            style={{
              // backgroundColor: "lightblue",
              width: "100%",
              height: "auto",
              padding: 16,
            }}
          >
            <p style={{ fontFamily: "sans-serif" }}>
              <h3>
                Elevate Your Professional Style with Our Japanese Imported
                Briefcases!
              </h3>
              Discover the perfect blend of functionality and sophistication
              with our briefcases, imported from Japan. Crafted with precision
              and designed for the modern professional, our briefcases ensure
              you make a lasting impression.
              <br /> Our Briefcase Collection Includes:
              <b> Leather Briefcases:</b> Luxurious and durable, ideal for a
              classic, professional look.<b> Slim Briefcases:</b> Sleek and
              minimalist, perfect for carrying essentials with ease.
              <b>Expandable Briefcases:</b> Flexible and practical, offering
              extra space when needed.<b> Laptop Briefcases:</b> Protective and
              stylish, designed to securely hold your tech.
              <b>Canvas Briefcases:</b>Lightweight and casual, combining
              practicality with modern design.
              <br /> Each briefcase is made from premium materials, reflecting
              Japanese craftsmanship and attention to detail. Carry your
              essentials in a briefcase that enhances both your professional
              image and everyday functionality. This text emphasizes the
              quality, variety, and professional appeal of your briefcases.
            </p>
          </div>
        </div>
      </div>

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
              className="w3-ripple w3-hover-text-blue"
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
          <div
            style={{ display: "flex", marginRight: 20 }}
            className="w3-right"
          >
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
    </div>
  );
}

export default HomePage;
