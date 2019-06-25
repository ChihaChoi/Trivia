import React, { Component } from 'react';
import socket from './socket'



class Timer extends Component {
    constructor(props) {
        super(props);
        this.state={time: 0}
    }

    componentDidMount(){
        socket.on('time',time=>this.setState({time:time}))        
    }


    render() { 
        return ( <div className="timer">{this.state.time}</div> );
    }
}
 
export default Timer;