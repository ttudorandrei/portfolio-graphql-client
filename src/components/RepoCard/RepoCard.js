import { Fade } from "react-reveal";
import Moment from "react-moment";

import formatRepoName from "../../utils/helpers/formatRepoName";

const RepoCard = ({ repo }) => {
  return (
    <Fade>
      <div className="d-flex flex-wrap flex-lg-row flex-md-column flex-sm-column justify-content-evenly align-items-center text-center mb-5 project-card dark-font p-3 m-3 w-100 h-auto">
        <div className="">
          <a href={repo.repoUrl}>
            <img
              src={`assets/img/${repo.repoName}.png`}
              className="card-img-top"
              alt="..."
              style={{ width: "40%", height: "auto" }}
            />
          </a>
        </div>

        <div
          className="mt-3 text-center"
          style={{ width: "400px", height: "auto" }}
        >
          <h5 className="card-title">{formatRepoName(repo.repoName)}</h5>
          {/* <h5 className="card-title">{repo.repoName}</h5> */}

          <div className="card-text">
            Created at{" "}
            <Moment format="YYYY-MM-DD, HH:mm">{repo.createdAt}</Moment>
          </div>
          <div className="card-text">{repo.repoDescription}</div>
          <div className="card-text">
            Check it out{" "}
            <a href={repo.deployedUrl} className="highlight">
              here
            </a>
          </div>
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
