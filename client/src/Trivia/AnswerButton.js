import React, { Component } from 'react';

class AnswerButton extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (             
        <div className = "answer-btn">
            <input id={`answer${this.props.number}`} value={this.props.number} type="radio" name="answer" onChange={this.props.changeAnswer}/>
            <button className="btn">
                <label dangerouslySetInnerHTML={{__html:this.props.answer }} htmlFor={`answer${this.props.number}`}>
                </label>
            </button> 
        </div> );
    }
}
 
export default AnswerButton;