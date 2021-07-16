const RepoCard = ({ repo }) => {
  return (
    <div>
      <div className="card mb-3">
        <a href={repo.repoUrl}>
          <img src="..." className="card-img-top" alt="..." />
        </a>
        <div className="card-body">
          <h5 className="card-title">{repo.repoName}</h5>
          <div className="card-text"> Created at {repo.createdAt}</div>
          <div className="card-text">Description (not from api)</div>
          <div className="card-text">
            <small className="text-muted">
              Technologies used: {repo.repoLanguage}
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepoCard;
