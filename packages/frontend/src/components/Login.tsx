import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./loginsignup.css";
import homeIcon from "../imgs/home.png";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3001/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error || "Login failed");
        return;
      }

      // Save JWT token and go to dashboard
      localStorage.setItem("token", data.token);
      navigate("/dashboard");
    } catch (err) {
      alert("Network error");
    }
  };

  return (
    <>
      <Link to="/" className="top-button">
        <img src={homeIcon} alt="Go to Home" />
      </Link>

      <div className="container">
        <div className="card" style={{ maxWidth: "400px", margin: "2rem auto" }}>
          <h3>Login</h3>

          <form onSubmit={handleLogin}>
            <label htmlFor="email">Email:</label><br />
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            /><br /><br />

            <label htmlFor="password">Password:</label><br />
            <input
              type="password"
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            /><br /><br />

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
