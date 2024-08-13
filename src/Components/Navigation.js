import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../Screens/HomePage";
import { Register } from "../Screens/AuthPage";
import DashboardScreen from "../Screens/DashboardScreen";
import NavBar from "./NavBar";
import Store from "../Screens/Store";

const Navigation = () => {
  const isAdmin = true; // You should replace this with actual logic to check admin status

  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Register />} />
          <Route path="/dashboard" element={<DashboardScreen />} />
          <Route path="/Store" element={<Store />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Navigation;
