import { Fade } from "react-reveal";
import ContactMeForm from "../../components/ContactMeForm/ContactMeForm";

const ContactMe = () => {
  return (
    <div className="position-absolute top-50 start-50 translate-middle container d-flex align-items-center flex-column my-5 w-100 h-100">
      <h3 className="highlight mt-5 ">Contact</h3>
      {/* contact-me form*/}
      <ContactMeForm />
      <h4 className="highlight mt-5">
        Or you can check out my social media accounts
      </h4>
      <div className="container d-flex flex-column flex-md-row justify-content-evenly mt-5">
        <Fade>
          {/* LinkedIn Logo */}
          <a
            href="https://linkedin.com/in/tudor-tocan"
            rel="noreferrer"
            target="_blank"
          >
            <div className="text-center mt-5">
              <img src="./assets/img/linkedin.png" alt="linkedin logo" />
              <div>LinkedIn</div>
            </div>
          </a>

          {/* GitHub Logo */}
          <a
            href="https://github.com/ttudorandrei"
            rel="noreferrer"
            target="_blank"
          >
            <div className="text-center mt-5">
              <img src="./assets/img/github-logo-dark.png" alt="github logo" />
              <div>GitHub</div>
            </div>
          </a>

          {/* Gmail Logo */}
          <a href="mailto:tudor.tocan@gmail.com">
            <div className="text-center my-5">
              <img src="./assets/img/gmail.png" alt="gmail logo" />
              <div>GMail</div>
            </div>
          </a>
        </Fade>
      </div>
    </div>
  );
};

export default ContactMe;
