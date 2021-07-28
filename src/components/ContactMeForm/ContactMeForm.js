const ContactMeForm = () => {
  return (
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
  );
};
export default ContactMeForm;
