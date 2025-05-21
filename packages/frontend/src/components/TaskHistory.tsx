import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function TaskHistory() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header>
        <div><strong>Pawgress Planner</strong></div>
        <nav className={menuOpen ? "active" : ""}>
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/add-edit-pet">Add/Edit Pet</Link>
          <Link to="/pet-details">Pet Details</Link>
          <Link to="/task-history">Task History</Link>
          <Link to="/add-task">Add Task</Link>
          <Link to="/faq">FAQ</Link>
        </nav>
        <div className="hamburger" onClick={toggleMenu}>
          <img src="/imgs/menu.png" alt="Menu icon" />
        </div>
      </header>

      <div className="container">
        <div className="card">
          <h3>Task History</h3>
          <p>✔️ April 28: Feed Fluffy, Walk Rex</p>
          <p>✔️ April 29: Groom Fluffy</p>
          <p>✔️ April 30: Feed Fluffy, Clean litter box</p>
        </div>
      </div>
    </>
  );
}
