import React, { Component } from 'react';
import Container from './Container'
import socket from './socket'


class Quiplash extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            time : 0
            
         }
    }
    componentDidMount(){
      //receive quiplash questions and setState
        socket.on('quiplashQuestions',(q1,q2)=>{
          this.setState({ data: ["Quiplash",q1,q2]})
          // console.log("received")
        })
    
        //timer =================================== set timer to server side
        setInterval(()=>{
          this.setState({time : this.state.time + 1})
          socket.emit('xdd',"asd")
        },1000)
        //=========================================
    
      }

    render() { 
        return ( 
            <div>
                {this.state.data == null ? "Awaiting Game to Start":
            <Container mode={this.state.mode} time ={this.state.time} data={this.state.data}/>
            
            }
            </div>
                
         );
    }
}
 
export default Quiplash;