import { Bounce } from "react-reveal";

const ResumeSkillsItem = () => {
  // array of skills
  const skills = [
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

  // for each skill return an h4
  return skills.map((skill) => {
    return (
      <Bounce left cascade>
        <h4 className="text-center">{skill.name}</h4>
      </Bounce>
    );
  });
};

export default ResumeSkillsItem;
