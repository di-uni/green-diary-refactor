import React from "react";
import Topbar from "../../components/topbar/Topbar";
import { Link } from "react-router-dom";
import "./home.css";

export default function Home() {
  document.documentElement.style.setProperty("--main-color", "#FFFFFF");
  return (
    <div className="home" style={{ backgroundImage: "#028C6A" }}>
      <Topbar />
      <div className="category">
        <div className="home_space" />
        <div className="zerowaste">
          <Link
            to="/zerowaste"
            style={{
              color: "inherit",
              textDecoration: "inherit",
            }}
          >
            <span>Zero Waste</span>
          </Link>
        </div>
        <div className="carbonfootprint">
          <Link
            to="/carbonfootprint"
            style={{
              color: "inherit",
              textDecoration: "inherit",
            }}
          >
            <span>Carbon Footprint</span>
          </Link>
        </div>
        <div className="food">
          <Link
            to="/food"
            style={{
              color: "inherit",
              textDecoration: "inherit",
            }}
          >
            <span>Food</span>
          </Link>
        </div>
        <div className="others">
          <Link
            to="/others"
            style={{
              color: "inherit",
              textDecoration: "inherit",
            }}
          >
            <span>Others</span>
          </Link>
        </div>
        <div className="home_space" />
      </div>
    </div>
  );
}
