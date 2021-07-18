import { gql, useQuery } from "@apollo/client";

import Portfolio from "./pages/Portfolio/Portfolio";
import ContactMe from "./pages/ContactMe/ContactMe";
import AboutMe from "./pages/AboutMe/AboutMe";
import PortfolioFooter from "./components/Footer";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";

import "./App.css";
import "./Spinner.css";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";

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

  console.log(data);

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
      <AboutMe user={data.user} />
      <ContactMe user={data.user} />
      <Portfolio repos={data.repos} />
      <PortfolioFooter />
    </div>
  );
};

export default App;
