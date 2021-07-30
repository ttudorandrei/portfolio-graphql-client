import { NavLink } from "react-router-dom";

const NavBarListItem = () => {
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

  return navbarLinks.map((link) => {
    return (
      <li className="nav-item text-center navbar-button-style" key={link.name}>
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
  });
};

export default NavBarListItem;
