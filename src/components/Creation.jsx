import "../styles/Creation.css";

const Creation = ({ title, desktopImg, mobileImg, alt }) => {
  return (
    <div className="cards-display">
      <div className="picture-container">
        <picture>
          <source srcSet={mobileImg} media="(max-width: 999px)" />
          <img src={desktopImg} alt={alt} />
        </picture>
        <div className="card-title">
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
};

export default Creation;
