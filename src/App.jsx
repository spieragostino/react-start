import "./App.scss";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />

      <Hero />

      <div className="container">
        <div className="cards">
          <Card title="Design" desc="UI moderna e pulita" />
          <Card title="React" desc="Componenti riutilizzabili" />
          <Card title="SCSS" desc="Stili organizzati e modulari" />
        </div>

        <Sidebar />
      </div>

      <Footer />
    </div>
  );
}

export default App;
