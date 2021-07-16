import "./App.css";
import Portfolio from "./components/Portfolio";
import NavigationBar from "./components/NavigationBar";

const App = () => {
  return (
    <div>
      <NavigationBar />
      <Portfolio
        repos={[
          {
            repoName: "weather_dashboard",
            repoUrl: "https://github.com/ttudorandrei/weather_dashboard",
            repoLanguage: "JavaScript",
            createdAt: "2021-04-11T10:51:24Z",
          },
          {
            repoName: "work_day_scheduler",
            repoUrl: "https://github.com/ttudorandrei/work_day_scheduler",
            repoLanguage: "HTML",
            createdAt: "2021-04-01T10:45:18Z",
          },
          {
            repoName: "e-commerce-backend",
            repoUrl: "https://github.com/ttudorandrei/e-commerce-backend",
            repoLanguage: "JavaScript",
            createdAt: "2021-06-01T11:36:21Z",
          },
          {
            repoName: "event-planner",
            repoUrl: "https://github.com/ttudorandrei/event-planner",
            repoLanguage: "JavaScript",
            createdAt: "2021-04-23T20:47:32Z",
          },
          {
            repoName: "tech-blog",
            repoUrl: "https://github.com/ttudorandrei/tech-blog",
            repoLanguage: "JavaScript",
            createdAt: "2021-06-04T12:39:37Z",
          },
          {
            repoName: "p1xel",
            repoUrl: "https://github.com/ttudorandrei/p1xel",
            repoLanguage: "HTML",
            createdAt: "2021-06-26T16:44:07Z",
          },
        ]}
      />
    </div>
  );
};

export default App;
