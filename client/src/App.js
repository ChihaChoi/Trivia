import React, { Component } from 'react';
import Game from './Game'
import Trivia from './Trivia/Trivia'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <Game /> );
    }
}
 
export default App;