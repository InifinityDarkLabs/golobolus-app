import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Basic Page Components
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

// Component Pages
import Landing from "./components/layout/Landing";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <div className="container-fluid">
            {/* <Route exact path="/" component={Landing} /> */}
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
