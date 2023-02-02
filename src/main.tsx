import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
  ApolloLink,
  concat,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

import "./input.css";
import App from "./App";
import store from "./store";

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) => {
      console.error(`Graphql error: ${message}, ${locations}, ${path}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: "http://localhost:3001/graphql" }),
]);

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  const token = localStorage.getItem("token");
  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : "",
    },
  });
  return forward(operation);
});

const client = new ApolloClient({
  link: concat(authMiddleware, link),
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApolloProvider>
);
