import { Fade } from "react-reveal";

const ContactMe = ({ user }) => {
  return (
    <Fade>
      <div className="container d-flex flex-column align-items-center my-5">
        <h3 className="highlight">Contact</h3>
        <div className="container d-flex flex-column w-50 justify-content-evenly mt-3">
          {/* form should go here */}
          <form>
            <div className="mb-3">
              <input
                type="name"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Type in your name"
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Type in your email address"
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Type in your message"
              ></textarea>
            </div>
            <div className="text-center mt-2">
              <button
                type="submit"
                className="btn btn-primary highlight border border-light w-50"
              >
                Send me a message
              </button>
            </div>
          </form>
        </div>
        <h4 className="highlight mt-5">
          Or you can check out my social media accounts
        </h4>
        <div className="container d-flex flex-column flex-md-row justify-content-evenly mt-5">
          {/* LinkedIn Logo */}
          <a
            href="https://linkedin.com/in/tudor-tocan"
            rel="noreferrer"
            target="_blank"
          >
            <div className="text-center mt-5">
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
            <div className="text-center mt-5">
              <img src="../assets/img/github-logo-dark.png" alt="github logo" />
              <div>GitHub</div>
            </div>
          </a>

          {/* Gmail Logo */}
          <a href="mailto:tudor.tocan@gmail.com">
            <div className="text-center my-5">
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
