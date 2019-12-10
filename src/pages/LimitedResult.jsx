/* eslint-disable require-jsdoc */
import React, { Component } from "react";
import AddModal from "../components/AddModal/AddModal";
import TableItem from "../components/Table/Table";
import { columns } from "../util/Columns";

class LimitedResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultData: []
    };
  }
  // fetches data those are stored in the local storage
  getData = () => {
    const data = [];

    for (let index = 0; index < localStorage.length; index++) {
      if (localStorage.key(index).includes("limited")) {
        //   json.push(JSON.parse(data[index]));
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
    return (
      <div>
        <AddModal />
        <div>
          <TableItem
            title="Limited Results"
            data={this.state.resultData}
            columns={columns}
          />
        </div>
      </div>
    );
  }
}

export default LimitedResult;
