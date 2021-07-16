import { Flip } from "react-reveal";

const RepoCard = ({ repo }) => {
  return (
    <Flip left>
      <div
        className="container d-flex justify-content-center align-items-center mt-3 project-card"
        style={{ width: "60rem", height: "18rem" }}
      >
        <a href={repo.repoUrl}>
          <div class="col-md-4">
            <img
              src="assets/img/tech-blog-landing-page.png"
              className="card-img-top"
              alt="..."
              style={{ width: "20rem", height: "auto" }}
            />
          </div>
        </a>
        <div class="col-md-8 px-5">
          <div class="card-body">
            <h5 class="card-title">{repo.repoName}</h5>
            <div className="card-text"> Created at {repo.createdAt}</div>
            <div className="card-text">Description (not from api)</div>
            <div className="card-text">
              <small className="card-text">
                Technologies used: {repo.repoLanguage}
              </small>
            </div>
          </div>
        </div>
      </div>
    </Flip>
  );
};

export default RepoCard;
