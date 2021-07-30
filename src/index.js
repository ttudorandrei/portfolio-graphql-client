import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import NavigationBar from "./components/NavigationBar/NavigationBar";

import "./index.css";

// getting data from GQL server
const client = new ApolloClient({
  uri: process.env.GRAPHQL_URL || "http://localhost:4000",
  cache: new InMemoryCache(),
});

// rendering the page with the router and apollo provider
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ApolloProvider client={client}>
        <NavigationBar />
        <App />
      </ApolloProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
