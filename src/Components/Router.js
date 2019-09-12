import React, { Component } from "react";
import { Route } from "react-router-dom";
import Service from "./Service";
import Contact from "./Contact";
import Testimonial from "./Testimonial";
import Pricing from "./Pricing";
import Team from "./Team";
import TeamDetail from "./TeamDetail";

class RouterURL extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Service} />
        <Route path="/contact" component={Contact} />
        <Route path="/testimonial" component={Testimonial} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/team" component={Team} />
        <Route path="/team/:slug.:id.html" component={TeamDetail} />
      </div>
    );
  }
}

export default RouterURL;
