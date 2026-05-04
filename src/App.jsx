import "./App.scss";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

function App() {
  const menu = [
    { name: "Home", link: "#" },
    { name: "Contatti", link: "#" },
  ];
  const textLogo = "Logo";
  const posts = [
    {
      title: "Post 1",
      text: "Testo di esempio per la prima card...",
    },
    {
      title: "Post 2",
      text: "Testo di esempio per la seconda card...",
    },
    {
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
          {posts.map((post, index) => (
            <Card key={index} title={post.title} desc={post.text} />
          ))}
        </div>

        <Sidebar />
      </div>

      <Footer />
    </div>
  );
}

export default App;
