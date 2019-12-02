import React, { Component } from "react";
import "./App.css";
import M from "materialize-css";
import Content from "./route/Content";

class App extends Component {
  componentDidMount() {
    M.AutoInit();
  }
  render() {
    return (
      <div className="container">
        <Content />
      </div>
    );
  }
}

export default App;
