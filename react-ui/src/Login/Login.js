import React, { Component } from 'react';
import LoginScreen from './LoginScreen'
import WaitingScreen from './WaitingScreen'
import Logo from '../transitions/Logo'

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
            <div className="login__logo">
                <Logo />
            </div>
            {this.state.waiting ? 
            <WaitingScreen /> : 
            <LoginScreen foo={this.props.foo} changeToWaiting={this.changeToWaiting.bind(this)}/>
            }

        </div> );
    }
}
 
export default Login;