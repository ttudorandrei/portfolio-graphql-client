import RepoCard from "../RepoCard";

const Portfolio = ({ repos }) => {
  return (
    <div className="container d-flex flex-column  justify-content-evenly mt-5">
      <div>My Projects</div>
      {repos.map((repo) => {
        return <RepoCard repo={repo} />;
      })}
    </div>
  );
};

export default Portfolio;
