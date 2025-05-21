import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function Dashboard() {
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

      <div className="container dashboard-grid">
        <div className="pet-list">
          <div className="card">
            <h3>Fluffy 🐱</h3>
            <p>Cat - 2 yrs</p>
          </div>
          <div className="card">
            <h3>Rex 🐶</h3>
            <p>Dog - 4 yrs</p>
          </div>
        </div>

        <div className="checklist">
          <div className="card">
            <h3>Today's Tasks</h3>
            <ul>
              <li><input type="checkbox" /> Feed Fluffy</li>
              <li><input type="checkbox" /> Walk Rex</li>
              <li><input type="checkbox" /> Clean litter box</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
