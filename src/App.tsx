import React, { useEffect, useState } from "react";
import { Gallery, Home } from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { darkMode } from "./helpers/darkMode";
import { getImages } from "./helpers/getImages";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");
  useEffect(() => {
    darkMode();
    getImages(term, setImages, setIsLoading);
  }, [term]);

  const searchGallery = (text: string) => {
    setTerm(text);
  };

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home images={images} />
          </Route>

          <Route path="/gallery">
            <Gallery
              images={images}
              isLoading={isLoading}
              searchText={searchGallery}
            />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
