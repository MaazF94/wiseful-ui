import Amplify from "@aws-amplify/core";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HomePage from "./screens/HomePage/HomePage";
import NotFound from "./screens/NotFound/NotFound"
import Questionnaire from "./screens/Questionnaire/Questionnaire";

// Some folks find value in a centralized route config.
// A route config is just data. React is great at mapping
// data into components, and <Route> is a component.

// Our route config is just an array of logical "routes"
// with `path` and `component` props, ordered the same
// way you'd do inside a `<Switch>`.

export default function RouterConfig() {
  Amplify.configure({
    Auth: {
      region: "us-east-2",
      userPoolId: "us-east-2_fUAHy7Z5Z",
      userPoolWebClientId: "6c9rnv6ggvlcmc73lj5j9m81oj",
    },
  });

  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/questionnaire">
            <Questionnaire />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
    </Router>
  );
}
