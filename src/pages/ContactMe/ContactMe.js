import { Fade } from "react-reveal";

const ContactMe = ({ user }) => {
  return (
    <Fade>
      <div className="container d-flex flex-column align-items-center mt-5 neg-zi">
        <h3>Contact</h3>
        <div className="container d-flex flex-row justify-content-evenly mt-3">
          {/* form should go here */}
        </div>
        <h4>Or you can stalk me on social media</h4>
        <div className="container d-flex flex-column flex-md-row justify-content-evenly mt-3">
          {/* LinkedIn Logo */}
          <a
            href="https://linkedin.com/in/tudor-tocan"
            rel="noreferrer"
            target="_blank"
          >
            <div className="text-center mt-3">
              <img src="../assets/img/linkedin.png" alt="linkedin logo" />
              <div>LinkedIn</div>
            </div>
          </a>

          {/* GitHub Logo */}
          <a
            href="https://github.com/ttudorandrei"
            rel="noreferrer"
            target="_blank"
          >
            <div className="text-center mt-3">
              <img src="../assets/img/github-logo-dark.png" alt="github logo" />
              <div>GitHub</div>
            </div>
          </a>

          {/* Gmail Logo */}
          <a href="mailto:tudor.tocan@gmail.com">
            <div className="text-center mt-3">
              <img src="../assets/img/gmail.png" alt="gmail logo" />
              <div>GMail</div>
            </div>
          </a>
        </div>
      </div>
    </Fade>
  );
};

export default ContactMe;
