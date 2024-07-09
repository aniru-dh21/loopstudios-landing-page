import facebook from "../assets/images/icon-facebook.svg";
import twitter from "../assets/images/icon-twitter.svg";
import pinterest from "../assets/images/icon-pinterest.svg";
import instagram from "../assets/images/icon-instagram.svg";
import logo from "../assets/images/logo.svg";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-main">
        <div className="footer-left">
          <div className="logo-container">
            <img src={logo} alt="logo" className="logo-footer" />
          </div>
          <div className="footer-nav-menu">
            <ul>
              <li>
                <a href=".">About</a>
              </li>
              <li>
                <a href=".">Career</a>
              </li>
              <li>
                <a href=".">Event</a>
              </li>
              <li>
                <a href=".">Products</a>
              </li>
              <li>
                <a href=".">Support</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-right">
          <div className="media-links">
            <img src={facebook} alt="facebook" className="media-icon" />
            <img src={twitter} alt="twitter" className="media-icon" />
            <img src={pinterest} alt="pinterest" className="media-icon" />
            <img src={instagram} alt="instagram" className="media-icon" />
          </div>
          <div className="footer-content-main">
            <p id="footer-content">
              {" "}
              &copy; 2021 Loopstudios. All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
