import "./App.css";
import Hero from "./components/Hero";
import Introduction from "./components/Introduction";
import Creations from "./components/Creations";

function App() {
  return (
    <div className="main-container">
      <Hero />
      <Introduction />
      <Creations />
    </div>
  );
}

export default App;
