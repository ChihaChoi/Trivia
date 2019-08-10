import React, { Component } from "react";
import Logo from "./Logo";

class Transition_SlideLeft extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="transition">
        <div className="trans--slideLeft trans--slideLeft__1" />
        <Logo />
        <div
          className={`trans--slideLeft trans--slideLeft__2 ${
            this.props.newTheme
          }`}
        />
      </div>
    );
  }
}

export default Transition_SlideLeft;
