import React from "react";
import { Gallery } from "./components/Gallery";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/gallery">
            <Gallery />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
