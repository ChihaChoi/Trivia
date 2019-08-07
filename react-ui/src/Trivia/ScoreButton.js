import React, { Component } from 'react';
import ScoreScreen from './ScoreScreen'

class ScoreButton extends Component {
    constructor(props) {
        super(props);
        this.state = { scoreScreen : false }
    }
    toggleScoreScreen(){
        {this.state.scoreScreen===false?
        this.setState({ scoreScreen : true}):
        this.setState({ scoreScreen : false})
    }
    console.log("hes")
}

    render() { 
        return ( <div>
            <input type="checkbox" className="score__checkbox" id="navi-toggle" onChange={this.toggleScoreScreen.bind(this)}/>
            <label for="navi-toggle" className="score__button">
                <i className="fas fa-trophy"></i>
            </label>
            <ScoreScreen playerData={this.props.playerData} visible={this.state.scoreScreen}/>
            


        </div> );
    }
}
 
export default ScoreButton;