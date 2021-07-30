import { NavLink } from "react-router-dom";
import NavBarListItem from "../NavBarListItem/NavBarListIem";

const NavigationBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark p-3">
      <div className="container" id="navbar">
        <NavLink className="navbar-brand brand-style" to="/about-me">
          <div className="highlight">Tudor Andrei Tocan</div>
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
        <div className="collapse navbar-collapse pos-zi" id="navbarNav">
          <ul className="navbar-nav navbar-font-styles">
            <NavBarListItem />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
