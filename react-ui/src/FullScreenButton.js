import React, { Component } from 'react';

class FullScreenButton extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <div className="score__button" onClick={this.props.fullScreen}>
            <i class="fas fa-expand"/>
        </div> );
    }
}
 
export default FullScreenButton;