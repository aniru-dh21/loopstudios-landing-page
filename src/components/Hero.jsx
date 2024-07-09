import Header from "./Header";
import "../../src/styles/Hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="overlay-div"></div>
      <Header />
      <section className="hero">
        <div className="hero-content-wrapper">
          <p className="hero-content">immersive experiences</p>
          <p className="hero-content">that delivers</p>
        </div>
      </section>
    </div>
  );
};
export default Hero;
