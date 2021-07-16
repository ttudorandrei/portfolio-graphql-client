import RepoCard from "../RepoCard";

const Portfolio = ({ repos }) => {
  return (
    <div>
      {repos.map((repo) => {
        return <RepoCard repo={repo} />;
      })}
    </div>
  );
};

export default Portfolio;
