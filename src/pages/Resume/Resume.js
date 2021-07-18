import { Fade } from "react-reveal";

const Resume = ({ user }) => {
  return (
    <div className="position-absolute top-50 start-50 translate-middle d-flex flex-column w-75">
      <Fade>
        <div className="d-flex flex-column">
          <h2 className="align-self-center">Technologies I use</h2>
          <h3 className="align-self-end mt-5 w-25">HTML</h3>
          <h3 className="align-self-end w-75">CSS</h3>
          <h3 className="align-self-end w-50">JavaScript</h3>
          <h3 className="align-self-center w-25">ReactJS</h3>
          <h3 className="align-self-end w-25">jQuery</h3>
          <h3 className="align-self-end w-75">NodeJS</h3>
          <h3 className="align-self-end w-50">ExpressJS</h3>
          <h3 className="align-self-center w-75">MySQL</h3>
          <h3 className="align-self-end w-25">MongoDB</h3>
          <h3 className="align-self-center">GraphQL</h3>
        </div>
      </Fade>
    </div>
  );
};

export default Resume;
