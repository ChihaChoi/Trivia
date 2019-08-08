import React, { Component } from 'react';

import './App.css'
import socket from './socket'
import Login from './Login/Login'
import Transition_SlideLeft from './transitions/Transition_SlideLeft'
import TriviaMain from './Trivia/TriviaMain';
import Fullscreen from "react-full-screen";


class Game extends Component {
  static defaultProps={
    //list of css theme classes 
    colorClasses : ['theme-blue','theme-red','theme-green','theme-purple']
  }
  constructor(props) {
    super(props);
    this.state = { 
      //set random theme
      color: this.props.colorClasses[Math.floor(Math.random()*this.props.colorClasses.length)],
      screen: "login",
      number: 0,
      isFull: false,
    }
  }


  componentDidMount(){
  //write question and answers to state once received from server
  socket.on('question',(question, answers, category)=>{
    if(this.state.waiting){
      this.setState({ 
        screen : "trivia",
        question: question,
        answers: answers,
        category: category
    })
    }
  })
  }
  handleSubmit(){
    console.log("hellooooooo")
    this.setState({screen:"transition"})
  }
  foo(){
    this.setState({ isFull: true });
    console.log("foo works!")
  }

  render() { 

    return(
    <div>
      <Fullscreen
          enabled={this.state.isFull}
          onChange={isFull => this.setState({isFull})}
        >
          <div className="full-screenable-node">
          <div className={"body "+this.state.color} >
          {this.state.screen=== 'login' ?
            <Login foo={this.foo.bind(this)} changeToWaiting={()=>{ this.setState({ waiting: "yes" })}}/> :
            <TriviaMain  question={this.state.question} answers={this.state.answers} category={this.state.category} /> 
          }
      </div>
    </div>
  </Fullscreen>
      </div>
    )
  }
}
export default Game;