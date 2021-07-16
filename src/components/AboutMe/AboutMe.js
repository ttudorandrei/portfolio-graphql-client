import { Fade } from "react-reveal";

const AboutMe = ({ user }) => {
  return (
    <Fade>
      <div className="container d-flex align-items-center flex-column mt-5 vh-100">
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
            <div className="container d-flex flex-column">
              <h1 className="w-75">"Hello World!"</h1>
              <h3 className="w-75">
                My Name is Tudor Andrei Tocan, a passionate Full-Stack developer
                based in Birmingham, UK.
              </h3>
              <div className="mt-5 w-75">
                If you are interested in a possible collaboration you can find
                my contact info below.
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default AboutMe;
