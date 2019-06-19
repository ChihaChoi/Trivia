import React, { Component } from 'react';
import ScoreScreen from './ScoreScreen'

class ScoreButton extends Component {
    constructor(props) {
        super(props);
        this.state = { scoreScreen : "hidden" }
    }
    toggleScoreScreen(){
        {this.state.scoreScreen==="hidden"?
        this.setState({ scoreScreen : "visible"}):
        this.setState({ scoreScreen : "hidden"})
    }
    console.log("hes")
}

    render() { 
        return ( <div>
            <input type="checkbox" className="score__checkbox" id="navi-toggle" onChange={this.toggleScoreScreen.bind(this)}/>
            <label for="navi-toggle" className="score__button">
                <i className="fas fa-trophy"></i>
            </label>

            {this.state.scoreScreen==="visible"?
            <ScoreScreen playerData={this.props.playerData} />:
            ""}


        </div> );
    }
}
 
export default ScoreButton;