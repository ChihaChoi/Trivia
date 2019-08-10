import React, { Component } from "react";
import Transition_SlideLeft from "../transitions/Transition_SlideLeft";
import TriviaMain from "./TriviaMain";

class Trivia extends Component {
  static defaultProps = {
    colorClasses: ["theme-blue", "theme-red", "theme-green", "theme-purple"]
  };
  constructor(props) {
    super(props);
    this.state = {
      color: this.props.colorClasses[
        Math.floor(Math.random() * this.props.colorClasses.length)
      ]
    };
  }
  render() {
    return (
      <div className="body theme-blue">
        {/* Insert Login here */}
        <TriviaMain.js />
        {/* <Transition_SlideLeft newTheme={this.state.color} /> */}
      </div>
    );
  }
}

export default Trivia;
