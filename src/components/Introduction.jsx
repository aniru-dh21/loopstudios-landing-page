import interactiveImg from "../assets/images/desktop/image-interactive.jpg";
import interactiveImgMobile from "../assets/images/mobile/image-interactive.jpg";
import "../styles/Introduction.css";

const Introduction = () => {
  return (
    <>
      <div className="intro-container">
        <div className="intro-main">
          <div className="intro-left">
            <picture id="intro-img">
              <source
                srcSet={interactiveImgMobile}
                media="(max-width: 1226px)"
              />
              <img
                src={interactiveImg}
                alt="interactive-image"
                className="interactive-img"
              />
            </picture>
          </div>
          <div className="intro-right">
            <h2 className="intro-heading">The Leader in interactive VR</h2>
            <p className="intro-content">
              Founded in 2011, Loopstudios has been producing world-class
              virtual reality projects for some of the best companies around the
              globe. Our award-winning creations have transformed businesses
              through digital experiences that bind to their brand.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Introduction;
