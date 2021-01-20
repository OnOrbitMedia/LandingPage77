import React, { useEffect, useState } from "react";
import { useSpring, a } from "react-spring";
import "./_navbar.scss";
import "../../../assets/fonts/RobotoLight300/Roboto-Regular.ttf";
import logo from "../../../assets/OnOrbit_Navbar_Logo.png";

function NavigationBar() {
  const [scrollVal, setScrollVal] = useState(0);
  const [scrollState, setScrollState] = useState(false);
  const [navState, setNavState] = useState(true);

  const { transform } = useSpring({
    from: { transform: "translate3d(0,0px,0)" },
    to: { transform: "translate3d(0," + ((navState) ? "0px," : "-150px") + "0)" }
  });
  
  useEffect(() => {
    const onScroll = e => {
      setScrollVal(e.target.documentElement.scrollTop);
      setScrollState(
        e.target.documentElement.scrollTop < scrollVal ? true : false
      );

      setNavState(scrollVal === 0 || scrollState);
    };
    
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  });

  return (
    <nav>
      <a.div style={{ transform }} className="topNav">
        <img className="navImage" src={logo} alt="Logo" />
        <span className="navButtons">
          <a className="anchorElements" href="./">Contact</a>
        </span>
        <span className="navButtons">
          <a className="anchorElements" href="./">About</a>
        </span>
        <span className="navButtons">
          <a className="anchorElements" href="./">Services</a>
        </span>
        <span className="navButtons selected" href="#">
          <a className="anchorElements" href="#">Home</a>
        </span>
      </a.div>
    </nav>
  );
}

NavigationBar.defaultProps = {
  className: "navbar"
};

export default NavigationBar;
