const NavigationBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid" id="navbar">
        <a className="navbar-brand" href="#navbar">
          Tudor Andrei Tocan
        </a>
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
              <a
                className="nav-link active"
                aria-current="page"
                href="#aboutMe"
              >
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#contactMe">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#portfolio">
                Portfolio
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
