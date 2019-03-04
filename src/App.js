import React, { Component } from "react";

import Control from "./components/Control";
import Display from "./components/Display";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Control />
        <Display />
      </div>
    );
  }
}

export default App;
