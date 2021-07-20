import { Fade } from "react-reveal";

const Resume = ({ user }) => {
  const technologies = [
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
    <div className="position-absolute top-50 start-50 translate-middle d-flex flex-column w-75 neg-zi">
      <Fade>
        <h3 className="text-center">Have a look at the technologies I use</h3>
        <div className="d-flex flex-column">
          {technologies.map((technology) => {
            return <h4 className="text-center">{technology.name}</h4>;
          })}
        </div>
        <h3 className="text-center">
          <div> Or download my Resume</div>
        </h3>
        <div className="text-center">
          {/* Download Resume */}
          <div className="text-center mt-3">
            <a
              href="../assets/doc/tudor-andrei-tocan-resume.pdf"
              download="Tudor Andrei Tocan - Resume"
            >
              <img
                src="assets/img/resume-icon.png"
                alt="download y resume"
              ></img>
            </a>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Resume;
