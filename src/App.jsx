import "./App.css";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <About />
      <Footer />
    </div>
  );
}

export default App;
