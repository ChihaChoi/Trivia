import React, { Component } from "react";
import LoginScreen from "./LoginScreen";
import WaitingScreen from "./WaitingScreen";
import Title from "./Title";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  changeToWaiting() {
    this.setState({ waiting: "on" });
    this.props.changeToWaiting();
  }
  render() {
    return (
      <div className="flex-column">
        <Title />
        {this.state.waiting ? (
          <WaitingScreen />
        ) : (
          <LoginScreen
            fullScreen={this.props.fullScreen}
            changeToWaiting={this.changeToWaiting.bind(this)}
          />
        )}
      </div>
    );
  }
}

export default Login;
