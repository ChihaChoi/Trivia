import React, { Component } from 'react';
import LoginScreen from './LoginScreen'
import WaitingScreen from './WaitingScreen'


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    // componentDidMount(){
    //     socket.on('question',()=>{

    //     })
    // }
    changeToWaiting(){
        this.setState({waiting:"on"})
        this.props.changeToWaiting()
    }
    render() { 
        return ( <div>
            {this.state.waiting ? 
            <WaitingScreen /> : 
            <LoginScreen changeToWaiting={this.changeToWaiting.bind(this)}/>
            }

        </div> );
    }
}
 
export default Login;