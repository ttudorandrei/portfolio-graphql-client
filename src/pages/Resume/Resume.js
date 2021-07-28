import { Bounce, Fade } from "react-reveal";

const Resume = () => {
  const technologies = [
    { name: "Googling" },
    { name: "HTML" },
    { name: "CSS" },
    { name: "JavaScript" },
    { name: "ReactJS" },
    { name: "jQuery" },
    { name: "NodeJS" },
    { name: "ExpressJS" },
    { name: "MySQL" },
    { name: "MongoDB" },
    { name: "GraphQL" },
  ];

  return (
    <div className="position-absolute top-50 start-50 translate-middle d-flex flex-column w-75">
      <Fade>
        <h3 className="text-center highlight">
          Have a look at the technologies I use
        </h3>
        {/* list of tech I use */}
        <div className="d-flex flex-column mt-3">
          {technologies.map((technology) => {
            return (
              <Bounce left cascade>
                <h4 className="text-center">{technology.name}</h4>
              </Bounce>
            );
          })}
        </div>
        <h3 className="text-center mt-5">
          <div className="highlight"> Or download my Resume</div>
        </h3>
        <div className="d-flex justify-content-center mt-3">
          {/* Download Resume Icon*/}
          <a
            href="../assets/doc/tudor-andrei-tocan-resume.pdf"
            download="Tudor Andrei Tocan - Resume"
            className="text-center"
          >
            <img
              src="assets/img/resume-icon.png"
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
