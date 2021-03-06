import React, { Component } from "react";
import ResultsAnswer from "./ResultsAnswer";
import Timer from "../Timer";

class AnswerScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container flex-column">
        <Timer />
        <div className="category title">{this.props.category}</div>
        <div
          className="question"
          dangerouslySetInnerHTML={{ __html: this.props.question }}
        />
        <div>
          <ResultsAnswer
            correct={this.props.correctAnswer === 0 ? "yes" : null}
            answer={this.props.answers[0]}
            players={this.props.playerAnswers[0]}
          />
          <ResultsAnswer
            correct={this.props.correctAnswer === 1 ? "yes" : null}
            answer={this.props.answers[1]}
            players={this.props.playerAnswers[1]}
          />
          <ResultsAnswer
            correct={this.props.correctAnswer === 2 ? "yes" : null}
            answer={this.props.answers[2]}
            players={this.props.playerAnswers[2]}
          />
          <ResultsAnswer
            correct={this.props.correctAnswer === 3 ? "yes" : null}
            answer={this.props.answers[3]}
            players={this.props.playerAnswers[3]}
          />
        </div>
      </div>
    );
  }
}

export default AnswerScreen;
