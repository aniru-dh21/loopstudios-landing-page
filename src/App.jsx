import "./App.css";
import Hero from "./components/Hero";
import Introduction from "./components/Introduction";
import Creations from "./components/Creations";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="main-container">
      <Hero />
      <Introduction />
      <Creations />
      <Footer />
    </div>
  );
}

export default App;
