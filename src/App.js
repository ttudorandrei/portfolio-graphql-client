import { gql, useQuery } from "@apollo/client";
import { Switch, Route } from "react-router-dom";

import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import Portfolio from "./pages/Portfolio/Portfolio";
import ContactMe from "./pages/ContactMe/ContactMe";
import AboutMe from "./pages/AboutMe/AboutMe";
import Resume from "./pages/Resume/Resume";

import "./Spinner.css";
import "./App.css";

// GQL query that gets data from github
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
      deployedUrl
      repoDescription
      repoLanguage
      createdAt
    }
  }
`;

const App = () => {
  // destructuring loading, error and data from useQuery hook
  const { loading, error, data } = useQuery(USER_QUERY);

  // if the data is still loading we are rendering a spinner
  if (loading) {
    return (
      <div>
        <LoadingSpinner />
      </div>
    );
  }

  // if we get an error we render an error message
  if (error) {
    return (
      <div>
        <ErrorMessage />
      </div>
    );
  }

  // if the data has finished loading we render our app
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
