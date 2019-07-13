import React, { Component } from 'react';
import Logo from './Logo'

class Transition_SlideLeft extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <div>

        <div className="trans--slideLeft trans--slideLeft__1">
        </div> 
        <Logo />
        <div className={`trans--slideLeft trans--slideLeft__2 ${this.props.newTheme}`}>
        </div> 
        

        </div>);
    }
}
 
export default Transition_SlideLeft;