import { useState } from "react";
import { Link } from "react-router-dom";
import menuIcon from '../imgs/menu.png';
import './style.css';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="nav-left">
        <strong>Pawgress Planner</strong>
        <button className="dark-toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>

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
        <img src={menuIcon} alt="Menu icon" />
      </div>
    </header>
  );
}
