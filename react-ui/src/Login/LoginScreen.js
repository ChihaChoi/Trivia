import React, { Component } from "react";
import socket from "../socket";

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textInput: "",
      playerName: "Your Name",
      selectedFile: require("../default_avatar.png"),
      fadingOut: false,
      validName: false
    };
  }

  handleChange(evt) {
    this.setState({ textInput: evt.target.value });
  }
  componentDidUpdate() {
    this.state.textInput.length > 2
      ? this.state.validName === false
        ? this.setState({ validName: true })
        : console.log("no change")
      : this.state.validName === true
      ? this.setState({ validName: false })
      : console.log("no change");
  }

  //upload name and photo to server
  uploadHandler = evt => {
    if (this.state.validName) {
      //set playername as global variable for when they reconnect
      window.playerName = this.state.textInput;

      //set callback to make setState sync to socket.emit
      this.setState(
        {
          playerName: this.state.textInput
        },
        () => {
          socket.emit("info", this.state.playerName);
          this.setState({ fadingOut: true });
          setTimeout(() => {
            this.props.changeToWaiting();
          }, 500); //fadeout animation length
        }
      );
    }
    evt.preventDefault();
  };
  render() {
    return (
      <div
        className={
          "container login-screen flex-column " +
          (this.state.fadingOut ? "fadeDown" : "")
        }
      >
        <form onSubmit={this.uploadHandler.bind(this)} className="flex-column">
          <div className="textbox">
            <input
              type="text"
              className="textbox__input"
              value={this.state.textInput}
              minLength="3"
              maxLength="10"
              onChange={this.handleChange.bind(this)}
              placeholder=" "
            />
            <label className="textbox__placeholder">Your Name</label>
          </div>
          <button
            type="button "
            className={"submit btn " + (this.state.validName ? "" : "invalid")}
            onClick={this.uploadHandler.bind(this)}
          >
            Play!
          </button>
        </form>
      </div>
    );
  }
}

export default LoginScreen;
