import React, { Component } from "react";
import Timer from "../Timer";
import ScoreButton from "../Trivia/ScoreButton";
import socket from "../socket";

class WaitingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { playerData: "" };
  }
  componentDidMount() {
    socket.on("playerData", data => {
      this.setState({ playerData: data });
      console.log("received");
    });
  }
  render() {
    return (
      <div>
        <ScoreButton playerData={this.state.playerData} />
        <div className="container waitingScreen flex-column fadeIn">
          <h1 className="waiting--title">Next round starts in </h1>
          <Timer mode="waiting" />
        </div>
      </div>
    );
  }
}

export default WaitingScreen;
