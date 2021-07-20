import { Fade } from "react-reveal";

const AboutMe = ({ user }) => {
  return (
    <Fade>
      <div className="container d-flex align-items-center flex-column mt-5 h-100 neg-zi">
        <div className="row container d-flex justify-content-evenly align-items-center a mt-5 h-75">
          <div className="col-md-4 d-flex flex-lg-row align-items-center mt-5">
            <div className="container d-flex flex-column align-items-center">
              <img
                className="about-me--profile-picture"
                src={user.profilePictureUrl}
                alt={user.name}
              ></img>
            </div>
          </div>
          <div className="col-md-8 d-flex align-items-center mt-5">
            <div className="container d-flex flex-column align-items-center">
              <h1 className="w-75 highlight">"Hello World!"</h1>
              <h5 className="mt-3 w-50">
                My Name is <span className="highlight">Tudor Andrei Tocan</span>
                , a passionate Full-Stack developer based in
                <span className="highlight"> Birmingham, UK</span>.
              </h5>
              <h3 className="mt-4 w-100">
                I really like working with
                <span className="highlight"> JavaScript</span> and
                <span className="highlight"> ReactJS</span> on the frontend, I
                use
                <span className="highlight"> ExpressJS</span> as the server-side
                framework and <span className="highlight">MongoDB </span>
                or
                <span className="highlight"> MySQL</span> as the database but
                I`m always down to learning new technologies.
              </h3>
              <h5 className="mt-4 w-75">
                Check out my
                <a href="/portfolio">
                  <span className="highlight"> Projects </span>
                </a>
                or my
                <a href="/resume">
                  <span className="highlight"> Resume </span>
                </a>
                if you want to find out more or just go to
                <a href="/contact-me">
                  <span className="highlight"> Contact Me </span>
                </a>
                to get in touch, I'd love to hear from you!
              </h5>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default AboutMe;
