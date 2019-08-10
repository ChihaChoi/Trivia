import React, { Component } from "react";
import LoginScreen from "./LoginScreen";
import WaitingScreen from "./WaitingScreen";
import Logo from "../transitions/Logo";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // componentDidMount(){
  //     socket.on('question',()=>{

  //     })
  // }
  changeToWaiting() {
    this.setState({ waiting: "on" });
    this.props.changeToWaiting();
  }
  render() {
    return (
      <div>
        <div className="login__logo">
          <Logo />
          <p className="login__sub-header">Chiha's Real-Time Trivia!</p>
        </div>
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
