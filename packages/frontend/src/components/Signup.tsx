import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./loginsignup.css";

export default function Signup() {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Simulate account creation, then redirect to login
    navigate("/login");
  };

  return (
    <>
      <Link to="/" className="top-button">
        <img src="/imgs/home.png" alt="Go to home" />
      </Link>

      <div className="container">
        <div className="card" style={{ maxWidth: "400px", margin: "2rem auto" }}>
          <h3>Sign Up</h3>

          {/* Simulated signup form */}
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label><br />
            <input type="text" name="name" id="name" required /><br /><br />

            <label htmlFor="email">Email:</label><br />
            <input type="email" name="email" id="email" required /><br /><br />

            <label htmlFor="password">Password:</label><br />
            <input type="password" name="password" id="password" required /><br /><br />

            <button type="submit">Create Account</button>
          </form>

          <p>
            Already have an account? <Link to="/login">Log in</Link>
          </p>
        </div>
      </div>
    </>
  );
}
