import { Fade } from "react-reveal";
import ResumeSkillsItem from "../../components/ResumeSkillsItem/ResumeSkillsItem";

const Resume = () => {
  return (
    <div className="position-absolute top-50 start-50 translate-middle d-flex flex-column w-75">
      <Fade>
        <h3 className="text-center highlight">
          Have a look at the skills I have
        </h3>
        {/* list of tech I use */}
        <div className="d-flex flex-column mt-3">
          <ResumeSkillsItem />
        </div>
        <h3 className="text-center mt-5">
          <div className="highlight"> Or download my Resume</div>
        </h3>
        <div className="d-flex justify-content-center mt-3">
          {/* Download Resume Icon*/}
          <a
            href="./assets/doc/tudor-andrei-tocan-resume.pdf"
            download="Tudor Andrei Tocan - Resume"
            className="text-center"
          >
            <img
              src="./assets/img/resume-icon.png"
              alt="download my resume"
            ></img>
            <div className="highlight">Download Here</div>
          </a>
        </div>
      </Fade>
    </div>
  );
};

export default Resume;
