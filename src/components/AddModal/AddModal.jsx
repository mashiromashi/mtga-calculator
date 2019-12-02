/* eslint-disable require-jsdoc */
import React, { Component } from "react";
import "./AddModal.css";
import ModalForm from "../ModalForm/ModalForm";

class AddModal extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
  }

  show() {
    this.setState({ visible: true });
  }

  hide() {
    this.setState({ visible: false });
  }
  render() {
    return (
      <div>
        <a
          className="waves-effect waves-light btn modal-trigger addbutton"
          href="#addmodal"
        >
          Modal
        </a>
        <div className="modal" id="addmodal">
          <div className="modal-content">
            <h4 className="center-align">Add Result</h4>
            <ModalForm />
          </div>
        </div>
      </div>
    );
  }
}

export default AddModal;
