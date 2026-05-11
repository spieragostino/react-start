import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">ReactStart</div>

      <ul className="nav-links">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>Services</li>
        <li>Contact</li>
      </ul>

      <button className="btn">Login</button>
    </nav>
  );
}

export default Navbar;
