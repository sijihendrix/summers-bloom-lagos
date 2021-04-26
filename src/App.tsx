import React from "react";
import { Gallery, Home } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/gallery" component={Gallery} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
