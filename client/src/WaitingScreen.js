import React, { Component } from 'react';
import Timer from './Timer'

class WaitingScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
            <Timer />
            <h1> WAITING....</h1>

        </div> );
    }
}
 
export default WaitingScreen;