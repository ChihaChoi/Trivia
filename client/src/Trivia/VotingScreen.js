import React, { Component } from 'react';
import socket from '../socket'

class VotingScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    //temporarily has login function because im lazy af
    componentDidMount(){
        window.playerName=prompt("enter your name")
        socket.emit('info',window.playerName)
    }
    render() { 
        return ( "voting" );
    }
}
 
export default VotingScreen;