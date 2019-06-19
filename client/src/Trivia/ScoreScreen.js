import React, { Component } from 'react';

class ScoreScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return(<div className="scoreScreen">

            {this.props.playerData?
            this.props.playerData.map((ele,i)=>{ return (
                <div className="scoreScreen__playerInfo" > 
                    <div> {ele.name} </div>
                    <div> {ele.score} </div>

                    {/* Currently uncompressed, finish in LoginScreen.js */}
                    <img src={ele.photo} />
                </div>
                
                )}) :
            "no"
            }
        </div>
        )
}
}
 
export default ScoreScreen;