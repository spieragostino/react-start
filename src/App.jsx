import "./App.scss";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState({
    name: "Simone",
    surname: "Ciao",
    age: 30,
    city: "Pescara",
  });
  //
  useEffect(() => {
    console.log("CIAO", user);
  }, [user]);
  const handleChangeCity = (city) => {
    // setUser((prevState) => ({ ...prevState, city: city }));
    setUser({ ...user, city: city });
  };
  const menu = [
    { name: "Home", link: "#" },
    { name: "Servizi", link: "#" },
    { name: "Contatti", link: "#" },
  ];
  const textLogo = "Logo";
  const posts = [
    {
      id: 1,
      title: "Post 1",
      text: "Testo di esempio per la prima card...",
    },
    {
      id: 2,
      title: "Post 2",
      text: "Testo di esempio per la seconda card...",
    },
    {
      id: 3,
      title: "Post 3",
      text: "Testo di esempio per la terza card...",
    },
  ];
  console.log(posts, textLogo, menu);
  //usare map per iterare i post e renderizzare una card per ogni post
  return (
    <div className="app">
      <Navbar />

      <Hero />

      <div className="container">
        <div className="cards">
          {posts.map((post) => (
            <Card key={post.id} title={post?.title} desc={post.text} />
          ))}
        </div>

        <Sidebar menu={menu} />
      </div>

      <Footer changCity={handleChangeCity} user={user} />
    </div>
  );
}

export default App;
