import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./loginsignup.css";
import { useState } from "react";
import homeIcon from '../imgs/home.png';

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const res = await fetch("http://localhost:3000/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      
      const data = await res.json();
      console.log("Signup response:", data);
      
      if (res.ok) {
        // If signup successful, redirect to login
        navigate("/login");
      } else {
        // Handle error (you might want to show this to the user)
        console.error("Signup failed:", data.message);
      }
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  return (
    <>
      <Link to="/" className="top-button">
        <img src={homeIcon} alt="Go to Home" />
      </Link>
      <div className="container">
        <div className="card" style={{ maxWidth: "400px", margin: "2rem auto" }}>
          <h3>Sign Up</h3>
          <form onSubmit={handleSignup}>
            <label htmlFor="email">Email:</label><br />
            <input 
              type="email" 
              id="email"
              value={email} 
              onChange={e => setEmail(e.target.value)}
              required 
            /><br /><br />
            
            <label htmlFor="password">Password:</label><br />
            <input 
              type="password" 
              id="password"
              value={password} 
              onChange={e => setPassword(e.target.value)}
              required 
            /><br /><br />
            
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