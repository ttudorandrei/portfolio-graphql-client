// import { useState } from "react";
import { NavLink } from "react-router-dom";

const NavigationBar = () => {
  const activeStyleSettings = {
    color: "#fff",
    border: "1px solid #fff",
    borderRadius: "20px",
  };

  const navbarLinks = [
    { link: "/about-me", name: "About Me" },
    { link: "/contact-me", name: "Contact Me" },
    { link: "/portfolio", name: "Portfolio" },
    { link: "/resume", name: "Resume" },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark  p-3">
      <div className="container" id="navbar">
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
            {navbarLinks.map((link) => {
              return (
                <li className="nav-item" key={link.name}>
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to={link.link}
                    activeStyle={activeStyleSettings}
                  >
                    {link.name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
