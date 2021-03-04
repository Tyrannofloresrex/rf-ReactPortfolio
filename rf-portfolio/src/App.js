import React from "react";
import Navbar from './components/Navbar/index';
import About from "./pages/about";
import Gallery from "./pages/gallery";
import Contact from "./pages/contact.js";
import Wrapper from "./components/Wrapper";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/gallery" component={Gallery} />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
