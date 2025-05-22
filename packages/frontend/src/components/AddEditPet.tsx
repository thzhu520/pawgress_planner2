// import { useState } from "react";
// import { Link } from "react-router-dom";
import "./style.css";
// import menuIcon from '../imgs/menu.png';

export default function AddEditPet() {
  // const [menuOpen, setMenuOpen] = useState(false);

  // const toggleMenu = () => {
  //   setMenuOpen(!menuOpen);
  // };

  return (
    <>
      {/* <header>
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
        <img src={menuIcon} alt="Menu icon" />
        </div>
      </header> */}

      <div className="container">
        <div className="card">
          <h3>Add or Edit Pet</h3>
          <form>
            <label htmlFor="petname">Name:</label><br />
            <input type="text" name="petname" id="petname" /><br /><br />

            <label htmlFor="type">Type:</label><br />
            <input type="text" name="type" id="type" /><br /><br />

            <label htmlFor="photo">Photo:</label><br />
            <input type="file" id="photo" /><br /><br />

            <button type="submit">Save Pet</button>
          </form>
        </div>
      </div>
    </>
  );
}
