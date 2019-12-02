import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <ul className="right">
            <li>
              <a href="/summary">Summary</a>
            </li>
            <li>
              <a href="/limited">Limited Results</a>
            </li>
            <li>
              <a href="/constructed">Constructed Results</a>
            </li>
            <li>
              <a href="/math">Math</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
