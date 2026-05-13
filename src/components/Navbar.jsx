import { NavLink } from "react-router-dom";

function Navbar({ menu }) {
  return (
    <nav className="navbar">
      <ul>
        {menu.map((item) => (
          <li key={item.id}>
            <NavLink
              to={item.slug}
              end={item.slug === "/"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {item.page}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
