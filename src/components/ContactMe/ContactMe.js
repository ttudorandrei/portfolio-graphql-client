const ContactMe = ({ user }) => {
  return (
    <div className="container d-flex flex-column align-items-center mt-5">
      <h3>Contact</h3>
      <div className="container-fluid d-flex flex-wrap justify-content-evenly align-items-center mt-5">
        <div className="text-center">
          <a
            href="https://linkedin.com/in/tudor-tocan"
            rel="noreferrer"
            target="_blank"
          >
            <img src="/assets/img/linkedin.png" alt="linkedin logo" />
          </a>
          <div>LinkedIn</div>
        </div>

        <div className="text-center">
          <a
            href="https://github.com/ttudorandrei"
            rel="noreferrer"
            target="_blank"
          >
            <img src="/assets/img/github-logo-dark.png" alt="github logo" />
          </a>
          <div>GitHub</div>
        </div>

        <div className="text-center">
          <a href="mailto:tudor.tocan@gmail.com">
            <img
              className="contact-img"
              src="assets/img/gmail.png"
              alt="gmail logo"
            />
          </a>
          <div>GMail</div>
        </div>
        <div className="contact--container">
          <div className="text-center">
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
    </div>
  );
};

export default ContactMe;
