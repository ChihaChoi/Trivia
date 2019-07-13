import React, { Component } from 'react';
import Timer from '../Timer'
import AnswerButton from './AnswerButton'
import socket from '../socket'


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
            
            <Timer /> 
            
            {/* update with correct category title */}
            <div className ="category title">{this.props.category}</div>

            <div className = "question" dangerouslySetInnerHTML={{__html: this.props.question}}></div>
            <div>
                <AnswerButton answerNumber={0} answer={this.props.answers[0]} changeAnswer={this.changeAnswer.bind(this)}/>
                <AnswerButton answerNumber={1} answer={this.props.answers[1]} changeAnswer={this.changeAnswer.bind(this)}/>
                <AnswerButton answerNumber={2} answer={this.props.answers[2]} changeAnswer={this.changeAnswer.bind(this)}/>
                <AnswerButton answerNumber={3} answer={this.props.answers[3]} changeAnswer={this.changeAnswer.bind(this)}/>
            </div>

        </div>);
    }
}
 
export default QuestionScreen;