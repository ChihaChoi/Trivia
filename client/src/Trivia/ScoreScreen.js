import React, { Component } from 'react';

class ScoreScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
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
    render() { 
        return(<div className="scoreScreen">

            {this.props.playerData?
            this.props.playerData.map((ele,i)=>{ return (
                <div className="playerInfo" > 
                    {/* Currently uncompressed, finish in LoginScreen.js */}
                    <img className="playerInfo__avatar"src={this.bufferToURL(ele.photo)} />
                    <div className="playerInfo__name"> {ele.name} </div>
                    <div className="playerInfo__score"> {ele.score} </div>
                    <hr className="playerInfo__line" />

                </div>
                
                )}) :
            "no"
            }
        </div>
        )
}
}
 
export default ScoreScreen;