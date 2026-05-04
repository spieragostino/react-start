function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">ReactStart</div>

      <ul className="nav-links">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>

      <button className="btn">Login</button>
    </nav>
  );
}

export default Navbar;
