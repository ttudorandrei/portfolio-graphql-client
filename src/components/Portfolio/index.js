import RepoCard from "../RepoCard";

const Portfolio = ({ repos }) => {
  return (
    <div
      className="container d-flex flex-column align-items-center mt-5"
      id="portfolio"
    >
      <h3>My Projects</h3>
      <div className="container-fluid d-flex flex-wrap justify-content-evenly align-items-center mt-3">
        {repos.map((repo) => {
          return <RepoCard repo={repo} />;
        })}
      </div>
    </div>
  );
};

export default Portfolio;
