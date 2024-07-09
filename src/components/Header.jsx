import { useEffect, useState } from "react";
import logo from "../assets/images/logo.svg";
import DesktopView from "./DesktopView";
import MobileView from "./MobileView";

const Header = () => {
  let [isWidth, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <header>
        <div className="logo-container">
          <a href="#" className="logo-link">
            <img className="logo-image" src={logo} alt="logo-image" />
          </a>
        </div>
        <div className="navbar-display">
          {isWidth >= 720 ? <DesktopView /> : <MobileView />}
        </div>
      </header>
    </>
  );
};

export default Header;
