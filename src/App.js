import React from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import SearchParms from "./SearchParams";
import Details from "./Details";

const App = () => {
  return (
    <React.StrictMode>
      <div>
        <header>
          <Link to="/">Adopt me!</Link>
        </header>
        <Router>
          <SearchParms path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
