import React, { Component } from 'react';
import Timer from '../Timer'
import AnswerButton from './AnswerButton'
import socket from '../socket'
import Transition_SlideLeft from '../transitions/Transition_SlideLeft'


class QuestionScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { selected: "" }
    }

    //on answer press, change selected state to selected answer
    changeAnswer(evt){
        this.setState({ selected: evt.target.value})
    }
    componentWillUnmount(){
        socket.emit('answer',this.state.selected,window.playerName)
        console.log("exiting...")
        
    }
    render() { 
        return ( 
        <div className="container">
            
            <Timer time={this.props.time} /> 
            <div>selected answer is : {this.state.selected}</div>
            <div className ="catagory title">General Nahlej</div>
            <div className = "question" dangerouslySetInnerHTML={{__html: this.props.question}}></div>
            <AnswerButton number={0} answer={this.props.answers[0]} changeAnswer={this.changeAnswer.bind(this)}/>
            <AnswerButton number={1} answer={this.props.answers[1]} changeAnswer={this.changeAnswer.bind(this)}/>
            <AnswerButton number={2} answer={this.props.answers[2]} changeAnswer={this.changeAnswer.bind(this)}/>
            <AnswerButton number={3} answer={this.props.answers[3]} changeAnswer={this.changeAnswer.bind(this)}/>

        </div>);
    }
}
 
export default QuestionScreen;