// import { useState } from "react";
import { NavLink } from "react-router-dom";

const NavigationBar = () => {
  // const [active, setActive] = useState(false);
  // onClick={() => {
  //   setActive("resume");
  // }}

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid" id="navbar">
        <NavLink className="navbar-brand" to="/about-me">
          Tudor Andrei Tocan
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                className="nav-link active"
                aria-current="page"
                to="/about-me"
                activeStyle={{ color: "red" }}
              >
                About Me
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link active"
                to="/contact-me"
                activeStyle={{ color: "red" }}
              >
                Contact Me
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link active"
                to="/portfolio"
                activeStyle={{ color: "red" }}
              >
                Portfolio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link active"
                to="/resume"
                activeStyle={{ color: "red" }}
              >
                Resume
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
