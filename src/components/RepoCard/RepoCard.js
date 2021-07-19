import { Fade } from "react-reveal";
import Moment from "react-moment";

import formatRepoNameName from "../../utils/helpers";

const RepoCard = ({ repo }) => {
  return (
    <Fade>
      <div className="d-flex flex-wrap flex-lg-row flex-sm-column justify-content-evenly align-items-center text-center mt-5 project-card">
        <div className="">
          <a href={repo.repoUrl}>
            <img
              src="assets/img/tech-blog-landing-page.png"
              className="card-img-top"
              alt="..."
              style={{ width: "200px", height: "auto" }}
            />
          </a>
        </div>

        <div className="p-2">
          <h5 className="card-title">{formatRepoNameName(repo.repoName)}</h5>
          <div className="card-text">
            Created at{" "}
            <Moment format="YYYY-MM-DD, HH:mm">{repo.createdAt}</Moment>
          </div>
          <div className="card-text">Description (not from api)</div>
          <div className="card-text">
            <small className="card-text">
              Technologies used: {repo.repoLanguage}
            </small>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default RepoCard;
