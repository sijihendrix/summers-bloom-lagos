import React, { useEffect } from "react";
import { Gallery, Home, Container } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { darkMode } from "./helpers/darkMode";

function App() {
  useEffect(() => {
    darkMode();
  }, []);
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Container component={Home}>
              <Home />
            </Container>
          </Route>

          <Route path="/gallery" component={Gallery} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
