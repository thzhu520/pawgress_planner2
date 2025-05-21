import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function Faq() {
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

      {/* Decorative floating elements */}
      <div className="faq-decoration">✧</div>
      <div className="faq-decoration">₊</div>
      <div className="faq-decoration">⋆</div>
      <div className="faq-decoration">⭒</div>
      <div className="faq-decoration">✦</div>

      <section className="faq-section">
        <h1 className="faq-title">FAQ</h1>

        <div className="faq-container">
          {[...Array(7)].map((_, i) => (
            <div className="faq-item" key={i}>
              <div className="faq-header">Placeholder</div>
              <div className="faq-body">
                Placeholder
                {i === 1 && (
                  <ul>
                    <li>Placeholder</li>
                    <li>Placeholder</li>
                    <li>Placeholder</li>
                    <li>Placeholder</li>
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
