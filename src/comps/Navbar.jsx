import "./Navbar.css";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <div id="navContainer">
      <div id="titleContainer">
        <h1 id="title"> Multimedia Website </h1>
      </div>
      <div id="navbarContainer">
        <ul id="navbar">
          <Link to="/video" className="navbarTabs">
            <li className="navbarItems"> Video </li>
          </Link>
          <Link to="/fotogalerie" className="navbarTabs">
            <li className="navbarItems"> Fotogalerie </li>
          </Link>
          <Link to="/animation" className="navbarTabs">
            <li className="navbarItems"> Animation </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
