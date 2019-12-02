/* eslint-disable require-jsdoc */
import React, { Component } from "react";
import AddModal from "../components/AddModal/AddModal";

class LimitedResult extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <AddModal />
      </div>
    );
  }
}

export default LimitedResult;
