import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { HashRouter as Router } from "react-router-dom";

import App from "./App";
import NavigationBar from "./components/NavigationBar/NavigationBar";

import "./index.css";

// getting data from GQL server
const client = new ApolloClient({
  uri: "https://warm-reaches-08169.herokuapp.com/",
  cache: new InMemoryCache(),
});

// rendering the page with the router and apollo provider
ReactDOM.render(
  <React.StrictMode>
    <Router basename="/">
      <ApolloProvider client={client}>
        <NavigationBar />
        <App />
      </ApolloProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
