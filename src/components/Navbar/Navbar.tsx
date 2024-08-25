import { useState } from "react";
import "./navbar.css";
import Sidebar from "../Sidebar/Sidebar";

const Navbar = () => {
  const [burger, setBurger] = useState<boolean>(false);
  const [sidebar, setSidebar] = useState<boolean>(false);

  const handleClick = () => {
    setBurger(!burger);
    setSidebar(!sidebar);
  };

  return (
    <>
      <div className="container">
        <div className="nav-logo">
          <h1>Ai.</h1>
        </div>
        {burger ? (
          <>
            <div onClick={handleClick} className="bg-nav-on"></div>
            <div onClick={handleClick} className="hamburger-active">
              <span className="lineo"></span>
              <span className="linet"></span>
              <span className="liner"></span>
            </div>
          </>
        ) : (
          <>
            <div onClick={handleClick} className="bg-nav-off"></div>
            <div onClick={handleClick} className="hamburger-normal">
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
            </div>
          </>
        )}
      </div>
      <div className={sidebar ? "nav-active" : "nav-close"}>
        <Sidebar />
      </div>
    </>
  );
};

export default Navbar;
