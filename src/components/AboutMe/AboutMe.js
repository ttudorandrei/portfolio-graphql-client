const AboutMe = ({ user }) => {
  return (
    <div className="container d-flex flex-column align-items-center mt-5">
      <h3>About Me</h3>
      <div className="container-fluid d-flex flex-wrap flex-column justify-content-evenly align-items-center mt-3">
        <div className="border border-danger">
          <img
            className="about-me--profile-picture"
            src={user.profilePictureUrl}
            alt={user.name}
          ></img>
        </div>
        <div className="mt-5 w-75 border border-danger">
          "Hello World!" My name is Tudor Andrei Tocan. I am a software
          developer based in Birmingham, UK. I have a passion for technology and
          everything around it. I like building responsive, user-friendly web
          application focusing on User Experience, Responsiveness and following
          the MVC architecture.
        </div>
        <div className="mt-5 w-75 border border-danger">
          I am currently a confident user of technologies such as HTML, CSS,
          JavaScript, Node.js, Handlebars and MySQL as well as libraries and
          packages like Bootstrap, jQuery, Express.js, Sequelize and BCrypt.
        </div>
        <div className="mt-5 w-75 border border-danger">
          If you are interested in a possible collaboration you can find my
          contact info below.
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
