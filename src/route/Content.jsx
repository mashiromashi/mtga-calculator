import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SummaryPage from "../pages/SummaryPage";
import LimitedResult from "../pages/LimitedResult";
import TraditionalResult from "../pages/TraditionalResult";

class Content extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={SummaryPage} />
          <Route path="/limited" component={LimitedResult} />
          <Route path="/traditional" component={TraditionalResult} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Content;
