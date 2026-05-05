function Footer({ user, changCity }) {
  const year = new Date().getFullYear();

  return (
    <footer>
      <p>© {year} React Project</p>
      <p>
        {user.name} - {user.surname} - {user.age} - {user.city}
      </p>
      <button
        onClick={() => changCity(user.city === "Pescara" ? "Roma" : "Pescara")}
      >
        Change city
      </button>
    </footer>
  );
}

export default Footer;
