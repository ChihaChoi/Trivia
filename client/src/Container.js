import React, { Component } from 'react';
import QuiplashAnswers from './QuiplashAnswers'
import Timer from './Timer'


class Container extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        if(this.props.data[0]=="0"){
            return ("awaiting")
        } else {
        return ( 
            <div className="container">
                <Timer time={this.props.time} />
                <h1 className="title">{this.props.data[0]}</h1>
                 
                    <QuiplashAnswers 
                        question1={this.props.data[1]}
                        question2={this.props.data[2]}
                    /> 
                
                    {/* put QuiplashWaiting and QuiplashVoting here */}
                
            </div>
            );
        }
    }
}
 
export default Container;