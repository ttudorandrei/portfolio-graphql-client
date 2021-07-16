const ContactMe = ({ user }) => {
  return (
    <div className="container d-flex flex-column align-items-center mt-5">
      <h3>Contact</h3>
      <div className="container-fluid d-flex flex-wrap justify-content-evenly align-items-center mt-5">
        <a
          href="https://linkedin.com/in/tudor-tocan"
          rel="noreferrer"
          target="_blank"
        >
          <img
            className="contact-img"
            src="assets/images/linkedin.png"
            alt="linkedin logo"
          />
        </a>

        <a
          href="https://github.com/ttudorandrei"
          rel="noreferrer"
          target="_blank"
        >
          <img
            className="contact-img"
            src="assets/images/GitHub-Mark-Light-32px.png"
            alt="github logo"
          />
        </a>

        <a href="mailto:tudor.tocan@gmail.com">
          <img
            className="contact-img"
            src="assets/images/gmail.png"
            alt="gmail logo"
          />
        </a>
        <div className="contact--container">
          <div className="item--contact">
            or download a PDF version of my resume
            <a
              className="downloadable-resume"
              href="./assets/doc/Tudor Andrei Tocan - CV.pdf"
              download="Tudor Andrei Tocan - Resume"
            >
              HERE
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
