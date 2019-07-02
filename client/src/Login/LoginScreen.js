import React, { Component } from 'react';
import socket from '../socket'

class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state ={ textInput: "", playerName: "Your Name", selectedFile:require('../default_avatar.png') }

    }

    handleChange(evt){
        this.setState({textInput: evt.target.value})
      }
    fileChangedHandler = event => {
        this.setState({ selectedFile: URL.createObjectURL(this.uploadInput.files[0])})
    }

    //upload name and photo to server
    uploadHandler = () => {
        //set callback to make setState sync to socket.emit

        //set playername as global variable for when they reconnect
        window.playerName = this.state.textInput

        this.setState({
            playerName: this.state.textInput, 
            textInput:""},
        ()=>{
            console.log(this.state.selectedFile)
            console.log(this.state.playerName)
            socket.emit('info',this.state.playerName,this.uploadInput.files[0])
            console.log(this.uploadInput.files[0])
            this.props.changeToWaiting()
        })
        
      }
    render() { 
        return ( 
        <div className="container login-screen">
            <img className="avatar" src={this.state.selectedFile}/>
            <input id="upload" type="file" ref={(ref) => { this.uploadInput = ref; }} onChange={this.fileChangedHandler}/>
            <label class="btn" for="upload">Choose Image</label>
            <input type="text" className="input"  value={this.state.textInput} onChange={this.handleChange.bind(this)} placeholder={this.state.playerName}/>

            <button className="submit btn" onClick={this.uploadHandler.bind(this)}>SUBMIT!</button>
        </div>
   );
    }
}
 
export default LoginScreen;