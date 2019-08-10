import React, { Component } from "react";

class AnswerButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="answer-btn">
        <input
          id={`answer${this.props.answerNumber}`}
          value={this.props.answerNumber}
          type="radio"
          name="answer"
          onChange={this.props.changeAnswer}
        />
        <button className="btn">
          <label
            dangerouslySetInnerHTML={{ __html: this.props.answer }}
            htmlFor={`answer${this.props.answerNumber}`}
          />
        </button>
      </div>
    );
  }
}

export default AnswerButton;
