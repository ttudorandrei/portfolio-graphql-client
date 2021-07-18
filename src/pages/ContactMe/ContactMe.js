import { Fade } from "react-reveal";

const ContactMe = ({ user }) => {
  return (
    <Fade>
      <div className="container d-flex flex-column align-items-center mt-5 neg-zi">
        <h3>Contact</h3>
        <div className="container d-flex flex-column flex-md-row justify-content-evenly mt-3">
          {/* LinkedIn Logo */}
          <div className="text-center mt-3">
            <a
              href="https://linkedin.com/in/tudor-tocan"
              rel="noreferrer"
              target="_blank"
            >
              <img src="/assets/img/linkedin.png" alt="linkedin logo" />
            </a>
            <div>LinkedIn</div>
          </div>

          {/* GitHub Logo */}
          <div className="text-center mt-3">
            <a
              href="https://github.com/ttudorandrei"
              rel="noreferrer"
              target="_blank"
            >
              <img src="/assets/img/github-logo-dark.png" alt="github logo" />
            </a>
            <div>GitHub</div>
          </div>

          {/* Gmail Logo */}
          <div className="text-center mt-3">
            <a href="mailto:tudor.tocan@gmail.com">
              <img src="assets/img/gmail.png" alt="gmail logo" />
            </a>
            <div>GMail</div>
          </div>

          {/* Download Resume */}
          <div className="text-center mt-3">
            <a
              href="/assets/doc/tudor-andrei-tocan-resume.pdf"
              download="Tudor Andrei Tocan - Resume"
            >
              <img
                src="assets/img/resume-icon.png"
                alt="download y resume"
              ></img>
            </a>
            <div>Download My Resume</div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default ContactMe;
