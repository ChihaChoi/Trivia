import React, { Component } from 'react';
import Timer from '../Timer'

class WaitingScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <div className="container">
            <h1>Next round starts in </h1>
            <Timer />
        </div> );
    }
}
 
export default WaitingScreen;