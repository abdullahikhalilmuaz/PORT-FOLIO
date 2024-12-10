import { Link } from "react-router-dom";
import "../Styles/Navbar.css";
export default function Navbar() {
  function handleNav() {
    document.getElementById("navs").classList.toggle("active");
  }
  return (
    <div className="navbar">
      <div className="title">
        H <span> Mu'az</span>
      </div>
      <div className="navs" id="navs">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>

          <li>
            <a href="#aboutme">About</a>
          </li>

          <li>
            <a href="#portfolio">Portfolio</a>
          </li>

          <li>
            <a href="#expertise">Expertise</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="menu" onClick={handleNav}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
