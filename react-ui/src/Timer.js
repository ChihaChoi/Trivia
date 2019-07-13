import React, { Component } from 'react';
import socket from './socket'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


class Timer extends Component {
    constructor(props) {
        super(props);
        this.state={time: 0, maxTime: null, finishState: 0}
    }

    componentDidMount(){
        //timer number logic 
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
                    }
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
        //============================================   
    }


    render() { 
        return ( <div className="timer">
        <CircularProgressbar counterClockwise="true" value={this.state.time} maxValue={this.state.maxTime }text={`${this.state.time}`}
        
        styles={buildStyles({
            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: 'butt',
         
            // Text size
            textSize: '28px',
         
            // How long animation takes to go from one percentage to another, in seconds
            pathTransitionDuration: 1,
         
            // Can specify path transition in more detail, or remove it entirely
            pathTransition: 'linear',
         
            // Colors
            pathColor: `white`,
            textColor: 'white',
            trailColor: 'transparent',
            backgroundColor: 'transparent',
          })}
          />;
        </div> );
    }
}
 
export default Timer;