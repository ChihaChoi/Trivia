import React, { Component } from 'react';
import ResultsAnswer from './ResultsAnswer';

class AnswerScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div className="container">
            {/* <div className ="catagory title">General Nahlej</div> */}
            <div className = "question" dangerouslySetInnerHTML={{__html: this.props.question}} ></div>
            <ResultsAnswer correct={this.props.correctAns===0? "yes" : null} answer={this.props.answers[0]} players={this.props.playersanswers[0]} />
            <ResultsAnswer correct={this.props.correctAns===1? "yes" : null} answer={this.props.answers[1]} players={this.props.playersanswers[1]} />
            <ResultsAnswer correct={this.props.correctAns===2? "yes" : null} answer={this.props.answers[2]} players={this.props.playersanswers[2]} />
            <ResultsAnswer correct={this.props.correctAns===3? "yes" : null} answer={this.props.answers[3]} players={this.props.playersanswers[3]} />
        </div> );
    }
}
 
export default AnswerScreen;