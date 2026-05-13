import { NavLink } from "react-router-dom";

function Sidebar({ menu }) {
  return (
    <aside className="sidebar">
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
    </aside>
  );
}

export default Sidebar;
