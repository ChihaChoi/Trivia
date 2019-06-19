import React, { Component } from 'react';

import './App.css'
import Quiplash from './Quiplash'
import socket from './socket'
import Login from './Login'
import Transition_SlideLeft from './transitions/Transition_SlideLeft'
import Trivia from './Trivia/Trivia';
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
      screen: "",
      number: 0
    }
  }


  componentDidMount(){
  //currently irrelevant
  //   socket.on('changeGame',()=>{ this.setState({game:"quiplash"}) 
  // console.log(this.state.game)})
  // socket.on('changeColor',color=>this.setState({color:'theme-'+color}))
  //=========
  socket.on('question',(question,answers)=>{
    if(this.state.waiting){
      this.setState({ 
        screen : "trivia",
        question: question,
        answers: answers
    })
    }
  })
  }


  handleSubmit(){
    console.log("hellooooooo")
    this.setState({screen:"transition"})
  }


  render() { 
    //temp testing trivia comp, delete when required
    return(<div className={"body "+this.state.color} >
      {this.state.screen=== 'trivia' ?
       <TriviaMain  question={this.state.question} answers={this.state.answers} /> :
       <Login changeToWaiting={()=>{ this.setState({ waiting: "yes" })  }}/>
      }
    </div>
    )
    //===========================

    if(this.state.game === null){

      return( <div className={"body "+this.state.color}>
         <Login onSubmit={this.handleSubmit.bind(this)} /> 
         {this.state.screen ==="transition"? <Transition_SlideLeft newTheme="theme-purple" />: ""}
      </div> )
      } else if(this.state.game === "trivia") {
        return( <TriviaMain />)
      }
  }
}
export default Game;