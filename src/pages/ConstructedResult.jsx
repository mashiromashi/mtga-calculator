import React, { Component } from "react";
import AddModal from "../components/AddModal/AddModal";
import TableItem from "../components/Table/Table";
import { columns } from "../util/Columns";

class ConstructedResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultData: []
    };
  }

  // fetches constructed data those are stored in the local storage
  getData = () => {
    const data = [];

    for (let index = 0; index < localStorage.length; index++) {
      if (localStorage.key(index).includes("constructed")) {
        data.push(JSON.parse(localStorage.getItem(localStorage.key(index))));
      }
    }
    // eslint-disable-next-line no-invalid-this
    this.setState({
      resultData: data
    });
    console.log(data);
  };
  componentDidMount() {
    this.getData();
  }

  render() {
    const { resultData } = this.state;
    return (
      <div>
        <AddModal />
        <div>
          <TableItem
            title="Constructed Results"
            columns={columns}
            data={resultData}
          />
        </div>
      </div>
    );
  }
}

export default ConstructedResult;
