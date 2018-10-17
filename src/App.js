import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Basic Page Components
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

// Component Pages
import Landing from "./components/layout/Landing";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Download from "./components/pages/Download";

// Error pages
import NotFound from "./components/error/NotFound";

import "./App.scss";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container-fluid">
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/download" component={Download} />
              <Route component={NotFound} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
