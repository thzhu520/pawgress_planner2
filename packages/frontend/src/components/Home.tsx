import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function Home() {
  return (
    <div className="home-wrapper">
      {/* Dot icon */}
      <img src="/imgs/dots.png" alt="dots" className="dot-icon" />

      <div className="home-content">
        <div className="logo-box">
          <img src="/imgs/logo.png" alt="Pawgress logo" />
        </div>
        <div className="button-group">
          <Link to="/login">🐾 log in 🐾</Link>
          <Link to="/signup">✧˖°. sign up .°˖✧</Link>
        </div>
      </div>
    </div>
  );
}
