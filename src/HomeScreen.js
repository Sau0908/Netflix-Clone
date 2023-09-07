import React from "react";
import "./HomeScreen.css";
import Navbar from "./Navbar";
import Banner from "./Banner";

const HomeScreen = () => {
  return (
    <div className="homescreen">
      <Navbar />
      <Banner />
    </div>
  );
};

export default HomeScreen;
