// import { useState } from "react";
// import { Link } from "react-router-dom";
import "./style.css";
// import menuIcon from '../imgs/menu.png';


export default function AddTask() {
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
          <h3>Create Task</h3>
          <form>
            <label htmlFor="taskname">Task Name:</label><br />
            <input type="text" name="taskname" id="taskname" /><br /><br />

            <label htmlFor="petSelect">Assign to Pet:</label><br />
            <select id="petSelect">
              <option>Fluffy</option>
              <option>Rex</option>
            </select><br /><br />

            <label htmlFor="repeatSelect">Repeat:</label><br />
            <select id="repeatSelect">
              <option>Once</option>
              <option>Daily</option>
              <option>Weekly</option>
            </select><br /><br />

            <button type="submit">Create Task</button>
          </form>
        </div>
      </div>
    </>
  );
}
