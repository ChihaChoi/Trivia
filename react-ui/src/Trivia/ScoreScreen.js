import React, { Component } from 'react';

class ScoreScreen extends Component {
    constructor(props) {
        super(props);
        
        this.state = {  }
    }
    static defaultProps ={
        colors : [
        '#013644',
        '#8f1a1d',
        '#d3623a',
        '#fba92e',
        '#008a93'
        ]
    }
    bufferToURL(buffer){
        if(buffer){
            var blob = new Blob( [ buffer ], { type: "image/jpeg" } );
            var urlCreator = window.URL || window.webkitURL;
            var imageUrl = urlCreator.createObjectURL( blob );
            return imageUrl
        } else {
            return require('../default_avatar.png')
        }
    }
    randomColor(j){
        while(j>this.props.colors.length){
            j=j-this.props.colors.length
        }
        let color = {
            backgroundColor: `${this.props.colors[j]}`,
        }
        return color;
        
    }
    slideIn(j){
        let transition = {
            transitionDelay: `${0.2*j}s`
        }
        return transition
    }
    render() { 
        return(<div className={`scoreScreen`+ (this.props.visible? ` visible`: "")}>
            {this.props.playerData?
            this.props.playerData.map((ele,i)=>{ 
                
                return (
                <div className= {`playerInfo`} style={Object.assign(this.randomColor(i),this.slideIn(i))}> 
                    <div className="playerInfo__name"> {ele.name} </div>
                    <div className="playerInfo__score"> {ele.score} </div>
                </div>
                
                )}) :
            "no data from server"
            }
        </div>
        )
}
}
 
export default ScoreScreen;

