import { Link } from "react-router-dom";
import "./style.css";
import dotIcon from '../imgs/dots.png';
import logoIcon from '../imgs/logo.png';


export default function Home() {
  return (
    <div className="home-wrapper">
      {/* Dot icon */}
      <img src={dotIcon} alt="dot icon" className="dot-icon" />


      <div className="home-content">
        <div className="logo-box">
          <img src={logoIcon} alt="Pawgress logo" />
        </div>
        <div className="button-group">
          <Link to="/login">🐾 log in 🐾</Link>
          <Link to="/signup">✧˖°. sign up .°˖✧</Link>
        </div>
      </div>
    </div>
  );
}
