import { NavLink } from "react-router-dom";

const NavigationBar = () => {
  const activeStyleSettings = {
    color: "#fff",
    borderRadius: "20px",
    backgroundColor: "#42275a",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  };

  const navbarLinks = [
    { link: "/about-me", name: "About Me" },
    { link: "/contact-me", name: "Contact Me" },
    { link: "/portfolio", name: "Portfolio" },
    { link: "/resume", name: "Resume" },
  ];

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
            {navbarLinks.map((link) => {
              return (
                <li
                  className="nav-item text-center navbar-button-style"
                  key={link.name}
                >
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
