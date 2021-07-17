import { gql, useQuery } from "@apollo/client";

import Portfolio from "./components/Portfolio";
import ContactMe from "./components/ContactMe/ContactMe";
import AboutMe from "./components/AboutMe/AboutMe";
import PortfolioFooter from "./components/Footer";

import "./App.css";

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
    return <div>Loading</div>;
  }

  if (error) {
    return <div>Error</div>;
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
