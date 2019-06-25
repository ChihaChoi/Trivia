import React, { Component } from 'react';
import QuestionScreen from './QuestionScreen'
import AnswerScreen from './AnswerScreen'
import VotingScreen from './VotingScreen'
import ScoreButton from './ScoreButton.js'
import socket from '../socket'
import Transition_SlideLeft from '../transitions/Transition_SlideLeft';



class TriviaMain extends Component {
    constructor(props) {
        super(props);
        this.state = { currentScreen: "questions",
            data:[],
            question:"" ,
            answers:["","","",""],
            playerAnswers:[[],[],[],[]],
        time:0 }
    }

    //sliding page transition
    transition(page){
        //transition state will create the transition animation component
        this.setState({  transition:"on" })
        setTimeout(()=>{
            this.setState ({currentScreen:page})
        },1000)
        setTimeout(()=>{
            this.setState({ transition: "off"})
        },4000)
    }


    componentDidMount(){
        //set up initial questions and answers
        this.setState({
            question:this.props.question,
            answers: this.props.answers
        })

        //update trivia with a new question and a set of answers and transition to next page
        socket.on('question',(question, answers)=>{
            this.transition('questions');
            setTimeout(()=>{
                this.setState ({ question:question, 
                    answers:answers
                    })
            },1000)
        })

        //update all players' answers and player scores
        socket.on('answers',(data,correctAnswer)=>{
            this.transition('answers');
            setTimeout(()=>{
                this.setState ({playerAnswers:data, correctAnswer: correctAnswer}) 
                //correct answer needs finishing [old comment with bad semantics, need to remember how]
            },1000)
        })
        socket.on('playerData',(data)=>{
            this.setState({playerData:data})
            console.log('received')
        })
        //timer update [temporary function, move to timer component]
        socket.on('time',time=>this.setState({time:time}))
    }

    //change mode buttons [temporary buttons for admin functionality]
    changeToQuestions(){
        this.transition('questions')
    }
    changeToAnswers(){
        this.transition('answers')
    }
    changeToVoting(){
        this.transition('voting')
    }
    //=====================
    render() { 
        let currentScreen = this.state.currentScreen
        return ( <div>
            {/* temporary buttons for admin functionality*/}
            <button onClick={this.changeToQuestions.bind(this)}>questions</button>
            <button onClick={this.changeToAnswers.bind(this)}>answers</button>
            <button onClick={this.changeToVoting.bind(this)}>voting</button>
            {/* //================== */}

            {/* Transition layer */}
            {this.state.transition==="on"? <Transition_SlideLeft newTheme="theme-blue" /> : ""}


            <ScoreButton  playerData={this.state.playerData} />
            {currentScreen === "questions" ?
            <QuestionScreen 
            time={this.state.time} 
            question={this.state.question} 
            answers={this.state.answers}
            /> :
            currentScreen === "answers" ?
            <AnswerScreen 
                question={this.state.question} 
                correctAnswer={this.state.correctAnswer} 
                answers={this.state.answers} 
                playerAnswers={this.state.playerAnswers} 
            /> :
            <VotingScreen />}
        </div> );
    }
}
 
export default TriviaMain;
