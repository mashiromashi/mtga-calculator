import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SummaryPage from "../pages/SummaryPage";
import LimitedResult from "../pages/LimitedResult";
import ConstructedResult from "../pages/ConstructedResult";
import Math from "../pages/Math";

class Content extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={SummaryPage} />
          <Route path="/limited" component={LimitedResult} />
          <Route path="/constructed" component={ConstructedResult} />
          <Route path="/math" component={Math} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Content;
