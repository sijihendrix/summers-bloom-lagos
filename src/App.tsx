import React, { useEffect, useState } from "react";
import { Gallery, Home, OurStory } from "./pages";
import { Container } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { darkMode } from "./helpers/darkMode";
import { getImages } from "./helpers/getImages";
import { CarouselWheel } from "./components/gallery/CarouselWheel";

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
            <Container component={Home}>
              <Home />
            </Container>
            <CarouselWheel images={images} />
          </Route>
          <Route path="/about">
            <OurStory images={images} />
          </Route>

          <Route path="/test">
            <CarouselWheel images={images} />
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
