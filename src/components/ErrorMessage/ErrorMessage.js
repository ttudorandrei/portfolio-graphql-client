const ErrorMessage = () => {
  return (
    <div className="position-absolute top-50 start-50 translate-middle">
      <div className="alert alert-danger text-center" role="alert">
        <h4 className="alert-heading">Ooops!</h4>
        <div className="m-3">
          It seems like something went wrong on our side. Please try again
          later!
        </div>
      </div>
    </div>
  );
};

export default ErrorMessage;
