import React, { Component } from "react";
import socket from "../socket";

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textInput: "",
      playerName: "Your Name",
      selectedFile: require("../default_avatar.png")
    };
  }

  handleChange(evt) {
    this.setState({ textInput: evt.target.value });
  }

  //upload name and photo to server
  uploadHandler = () => {
    //set callback to make setState sync to socket.emit

    //set playername as global variable for when they reconnect
    window.playerName = this.state.textInput;

    this.setState(
      {
        playerName: this.state.textInput,
        textInput: ""
      },
      () => {
        console.log(this.state.playerName);
        socket.emit("info", this.state.playerName);
        this.props.changeToWaiting();
      }
    );
    this.props.fullScreen();
  };
  render() {
    return (
      <div className="container login-screen flex-column">
        <div className="textbox">
          <input
            type="text"
            className="textbox__input"
            value={this.state.textInput}
            maxLength="10"
            onChange={this.handleChange.bind(this)}
            placeholder=" "
          />
          <label className="textbox__placeholder">Your Name</label>
        </div>
        <button className="submit btn" onClick={this.uploadHandler.bind(this)}>
          Play!
        </button>
      </div>
    );
  }
}

export default LoginScreen;
