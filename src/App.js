import { gql, useQuery } from "@apollo/client";
import { Switch, Route } from "react-router-dom";

import Portfolio from "./pages/Portfolio/Portfolio";
import ContactMe from "./pages/ContactMe/ContactMe";
import AboutMe from "./pages/AboutMe/AboutMe";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";

import "./App.css";
import "./Spinner.css";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import Resume from "./pages/Resume/Resume";

const USER_QUERY = gql`
  query Query {
    user {
      username
      profilePictureUrl
      githubUrl
      name
      company
      location
      portfolio
      email
      aboutMe
      followers
      publicRepos
      createdAt
      updatedAt
    }
    repos {
      repoName
      repoUrl
      repoLanguage
      createdAt
    }
  }
`;

const App = () => {
  const { loading, error, data } = useQuery(USER_QUERY);

  if (loading) {
    return (
      <div>
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <ErrorMessage />
      </div>
    );
  }

  return (
    <div className="d-flex flex-column">
      <Switch>
        <Route exact path="/">
          <AboutMe user={data.user} />
        </Route>
        <Route exact path="/about-me">
          <AboutMe user={data.user} />
        </Route>
        <Route exact path="/contact-me">
          <ContactMe user={data.user} />
        </Route>
        <Route exact path="/portfolio">
          <Portfolio repos={data.repos} />
        </Route>
        <Route exact path="/resume">
          <Resume />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
