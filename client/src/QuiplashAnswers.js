import React, { Component } from 'react';
import socket from './socket'


class QuiplashAnswers extends Component {
    constructor(props) {
        super(props);
        this.state = {questionNumber : 1,  
            questionActive: this.props.question1,
            textInput: "",
            answer1: "",
            answer2: ""
        }
    }
    componentDidMount(){
    }
    //next question button function
    submitAnswer(){
        //change question to next and store answer in state.answer1
        if(this.state.questionNumber===1){
            this.setState({ 
                questionNumber: 2,
                questionActive: this.props.question2,
                answer1: this.state.textInput,
                textInput: ""
            })
            console.log(this.state.answer1)
            //move to wait and store answer in state.answer2
        } else if(this.state.questionNumber===2){
            this.setState({
                questionNumber: 3,
                questionActive: "awaiting...",
                answer2: this.state.textInput,
                textInput: ""
            })
            console.log(this.state.answer2)

        } else {
            console.log(this.state.answer1,"  and  ",this.state.answer2)
            socket.emit('quips',window.playerName, this.state.answer1, this.state.answer2)
        }
    }
    handleChange(evt){
        this.setState({textInput: evt.target.value})
      }

    render() { 
        return ( 
            <div className="container">
                <h2 className="prompt">{this.state.questionActive}</h2>
                <div className="action">
                    <form action="">
                        <textarea  maxLength="70" className="input" value={this.state.textInput} onChange={this.handleChange.bind(this)} placeholder="Your Answer"> </textarea>
                        <button type="button" onClick={this.submitAnswer.bind(this)}className="submit">Submit answer</button>
                    </form>
                </div>
            </div>
         );
    }
}
 
export default QuiplashAnswers;