import React, { Component } from 'react';
import Timer from '../Timer'

class WaitingScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <div className="container waitingScreen">
            <h1 className="waiting--title">Next round starts in </h1>
            <Timer mode="waiting"/>
        </div> );
    }
}
 
export default WaitingScreen;