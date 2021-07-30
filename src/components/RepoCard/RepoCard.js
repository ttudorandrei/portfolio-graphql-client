import Moment from "react-moment";
import { Fade } from "react-reveal";
import { GrGithub } from "react-icons/gr";
import { CgWebsite } from "react-icons/cg";
import { IconContext } from "react-icons";

import formatRepoName from "../../utils/helpers/formatRepoName";

const RepoCard = ({ repo }) => {
  return (
    <IconContext.Provider value={{ size: "20px" }}>
      <Fade>
        <div className="card p-1 m-4 text-center text-light project-card">
          {/* project image */}
          <img
            src={`https://github.com/ttudorandrei/portfolio-graphql-client/tree/main/public/assets/img/${repo.repoName}.png`}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            {/* repo name */}
            <h5 className="card-title">{formatRepoName(repo.repoName)}</h5>
            {/* date repo was created at */}
            <div className="card-text">
              Created at{" "}
              <Moment format="YYYY-MM-DD, HH:mm">{repo.createdAt}</Moment>
            </div>
          </div>

          <div className="card-body">
            {/* repo description */}
            <div className="card-text">{repo.repoDescription}</div>
            <div className="card-text mt-3">
              <div className="m-3">
                {/* repo deployed url */}
                <a
                  href={repo.deployedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CgWebsite />
                  <div>Deployed link</div>
                </a>
              </div>
              <div className="m-3">
                {/* github link */}
                <a
                  href={`https://github.com/ttudorandrei/${repo.repoName}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GrGithub />
                  <div>Link to github</div>
                </a>
              </div>
            </div>
            {/* tech used (comes from github) */}
            <div className="card-text">
              <small className="card-text">
                Technologies used: {repo.repoLanguage}
              </small>
            </div>
          </div>
        </div>
      </Fade>
    </IconContext.Provider>
  );
};

export default RepoCard;
