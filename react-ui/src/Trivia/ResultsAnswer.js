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
        <div className={(this.props.correct? 'results__container--correct ' : ``)  +"results__container"}>
            <div
                className= {"results__answer"}
                dangerouslySetInnerHTML={{__html:this.props.answer}}
            ></div>
                {this.props.correct? 
                    <div className="results__plusOne">+1</div>
                    :""} 
            <div className="results__players">
                {/* lists each player that chose the answer */}
                {this.props.players.map((ele,i)=>{
                    return(
                        <div className={(ele===window.playerName? 'results__players__player--active': '' ) +" results__players__player"}>
                        {ele===window.playerName? 'YOU!! :)' : ele}
                        </div>
                    )
                })}
            </div>
        </div> 
        );
    }
}
 
export default ResultsAnswer;