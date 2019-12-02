/* eslint-disable new-cap */
/* eslint-disable require-jsdoc */
import React, {Component} from 'react';
import './App.css';
import M from 'materialize-css';
import Content from './route/Content';
import NavBar from './components/NavBar/NavBar';

class App extends Component {
  componentDidMount() {
    M.AutoInit();
  }
  render() {
    return (
      <div>
        <header>
          <NavBar />
        </header>
        <div className="container">
          <Content />
        </div>
      </div>
    );
  }
}

export default App;
