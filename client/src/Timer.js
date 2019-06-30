import React, { Component } from 'react';
import socket from './socket'
import { TLSSocket } from 'tls';



class Timer extends Component {
    constructor(props) {
        super(props);
        this.state={time: 0, maxTime: null, finishState: 0}
    }

    componentDidMount(){
        socket.on('time',(time,mode)=>{
            console.log(time,"---",mode)
                //countdown timer on waiting screen will now countdown for both q&a timers
                if(mode==="question" && this.props.mode==="waiting"){
                    const answerRoundLength = 9

                    if(this.state.maxTime === null){
                        this.setState({maxTime:time + answerRoundLength})
                    }
                    if(this.state.finishState === 0){
                        if(mode==="answer"){
                            if(time===0){ this.setState ({finishState:1}) }
                            this.setState({time:time})
                        } else {
                            this.setState({time:time + answerRoundLength})
                        }
                    },mn
                } else {   
                //set max timer for countdown animation
                if(this.state.maxTime === null){
                    this.setState({maxTime:time})
                }
                //prevent countdown past 0
                if(this.state.finishState === 0){
                    if(time===0){ this.setState ({finishState:1}) }
                    this.setState({time:time})
                }
            }   
        })   
    }


    render() { 
        return ( <div className="timer">{this.state.time}/{this.state.maxTime}</div> );
    }
}
 
export default Timer;