import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./loginsignup.css";

export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Simulate login and navigate to dashboard
    navigate("/dashboard");
  };

  return (
    <>
      <Link to="/" className="top-button">
        <img src="/imgs/home.png" alt="Go to home" />
      </Link>

      <div className="container">
        <div className="card" style={{ maxWidth: "400px", margin: "2rem auto" }}>
          <h3>Login</h3>

          {/* Simulated login form */}
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label><br />
            <input type="email" name="email" id="email" required /><br /><br />

            <label htmlFor="password">Password:</label><br />
            <input type="password" name="password" id="password" required /><br /><br />

            <button type="submit">Log In</button>
          </form>

          <p>
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </div>
      </div>
    </>
  );
}
