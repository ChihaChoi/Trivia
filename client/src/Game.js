import React, { Component } from 'react';

import './App.css'
import socket from './socket'
import Login from './Login'
import Transition_SlideLeft from './transitions/Transition_SlideLeft'
import TriviaMain from './Trivia/TriviaMain';


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
      number: 0
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


  render() { 

    return(
    <div className={"body "+this.state.color} >
      {this.state.screen=== 'login' ?
       <Login changeToWaiting={()=>{ this.setState({ waiting: "yes" })}}/> :
       <TriviaMain  question={this.state.question} answers={this.state.answers} category={this.state.category} /> 
      }
    </div>
    )
  }
}
export default Game;