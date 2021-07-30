import { Fade } from "react-reveal";

const ContactMeForm = () => {
  return (
    <Fade>
      <form className="mt-3 w-50">
        <div className="m-3">
          <input
            type="name"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Type in your name"
          />
        </div>
        <div className="m-3">
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Type in your email address"
          />
        </div>
        <div className="m-3">
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
            className="btn btn-primary highlight border border-light w-50 mt-4"
          >
            Send me a message
          </button>
        </div>
      </form>
    </Fade>
  );
};
export default ContactMeForm;
