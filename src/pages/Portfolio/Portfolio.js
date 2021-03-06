import RepoCard from "../../components/RepoCard/RepoCard";

const Portfolio = ({ repos }) => {
  return (
    <div className="position-absolute top-50 start-50 translate-middle container d-flex flex-column align-items-center mt-5 h-100">
      <h3 className="mt-5 highlight">My Projects</h3>
      <div className="container-fluid d-flex flex-wrap justify-content-evenly align-items-center mb-5">
        {repos.map((repo) => {
          return <RepoCard repo={repo} />;
        })}
      </div>
    </div>
  );
};

export default Portfolio;
