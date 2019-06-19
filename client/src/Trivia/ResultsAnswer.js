import React, { Component } from 'react';

class ResultsAnswer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount(){
        //socket.on the submitted answer
    }
    render() { 
        return ( 
        <div className="results__container">
            <div className="results__answer">
                {this.props.answer}
                {this.props.correct? "YESSSS":""} 
                {/* format properly */}
            </div>
            <div className="results__players">
                {/* lists each player that chose the answer */}
                {this.props.players.map((ele,i)=>{
                    return(
                        <div className="results__players--player">{ele}</div>
                    )
                })}
            </div>
        </div> 
        );
    }
}
 
export default ResultsAnswer;