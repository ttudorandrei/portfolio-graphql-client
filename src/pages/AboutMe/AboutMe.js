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
              <h1 className="w-75">"Hello World!"</h1>
              <h5 className="mt-3 w-50">
                My Name is Tudor Andrei Tocan, a passionate Full-Stack developer
                based in Birmingham, UK.
              </h5>
              <h3 className="mt-4 w-100">
                I really like JavaScript, I love ReactJS and I think it's
                amazing how they blend with ExpressJS and MongoDB or MySQL.
              </h3>
              <h5 className="mt-4 w-75">
                Check out my <a href="/portfolio">Projects</a> or my{" "}
                <a href="/resume">Resume</a> if you want to find out more or
                just go to <a href="/contact-me">Contact Me</a> to get in touch,
                I'd love to hear from you!
              </h5>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default AboutMe;
