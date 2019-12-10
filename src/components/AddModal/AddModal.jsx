import React from "react";
import "./AddModal.css";
import ModalForm from "../ModalForm/ModalForm";

const AddModal = () => (
  <div>
    <a
      className="waves-effect waves-light btn modal-trigger addbutton"
      href="#addmodal"
    >
      Add Data
    </a>
    <div className="modal" id="addmodal">
      <div className="modal-content">
        <h4 className="center-align">Add Result</h4>
        <ModalForm />
      </div>
    </div>
  </div>
);

export default AddModal;
