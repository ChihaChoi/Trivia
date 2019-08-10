import React, { Component } from "react";
import QuestionScreen from "./QuestionScreen";
import AnswerScreen from "./AnswerScreen";
import ScoreButton from "./ScoreButton.js";
import socket from "../socket";
import Transition_SlideLeft from "../transitions/Transition_SlideLeft";

class TriviaMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentScreen: "questions",
      data: [],
      question: "",
      answers: ["", "", "", ""],
      playerAnswers: [[], [], [], []]
    };
  }

  //sliding page transition
  transition(page) {
    //transition state will create the transition animation component
    this.setState({ transition: "on" });
    setTimeout(() => {
      this.setState({ currentScreen: page });
    }, 1000); //1000 is length of initial stage transition
    setTimeout(() => {
      this.setState({ transition: "off" });
    }, 4000); //4000 is full length of stage transition
  }

  componentDidMount() {
    //set up initial questions and answers
    this.setState({
      question: this.props.question,
      answers: this.props.answers,
      category: this.props.category
    });

    //update trivia with a new question and a set of answers and transition to next page
    socket.on("question", (question, answers, category) => {
      this.transition("questions");
      setTimeout(() => {
        this.setState({
          question: question,
          answers: answers,
          category: category
        });
      }, 1000); //1000 is length of initial stage transition
    });

    //update all players' answers and player scores
    socket.on("answers", (data, correctAnswer) => {
      this.transition("answers");
      setTimeout(() => {
        this.setState({ playerAnswers: data, correctAnswer: correctAnswer });
        //correct answer needs finishing [old comment with bad semantics, need to remember how]
      }, 1000);
    });
    socket.on("playerData", data => {
      this.setState({ playerData: data });
      console.log("received");
    });
  }

  render() {
    let currentScreen = this.state.currentScreen;
    return (
      <div>
        {/* Transition layer */}
        {this.state.transition === "on" ? (
          <Transition_SlideLeft newTheme="theme-blue" />
        ) : (
          ""
        )}

        <ScoreButton playerData={this.state.playerData} />

        {currentScreen === "questions" ? (
          <QuestionScreen
            category={this.state.category}
            question={this.state.question}
            answers={this.state.answers}
          />
        ) : currentScreen === "answers" ? (
          <AnswerScreen
            category={this.state.category}
            question={this.state.question}
            correctAnswer={this.state.correctAnswer}
            answers={this.state.answers}
            playerAnswers={this.state.playerAnswers}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default TriviaMain;
