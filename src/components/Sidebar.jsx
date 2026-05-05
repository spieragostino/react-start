function Sidebar({ menu }) {
  return (
    <aside className="sidebar">
      <h3>Menu</h3>

      <h3>Links</h3>
      <ul>
        {menu.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
