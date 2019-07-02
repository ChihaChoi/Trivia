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
        }
    }
    render() { 
        return(<div className="scoreScreen">

            {this.props.playerData?
            this.props.playerData.map((ele,i)=>{ return (
                <div className="scoreScreen__playerInfo" > 
                    <div> {ele.name} </div>
                    <div> {ele.score} </div>

                    {/* Currently uncompressed, finish in LoginScreen.js */}
                    <img src={this.bufferToURL(ele.photo)} />



                    {/* <img src={'data:image/jpeg;base64,' + buf.toString('base64')} /> */}

                    {/* var blob = new Blob( [ arrayBufferView ], { type: "image/jpeg" } );
                    var urlCreator = window.URL || window.webkitURL;
                    var imageUrl = urlCreator.createObjectURL( blob ); */}
                </div>
                
                )}) :
            "no"
            }
        </div>
        )
}
}
 
export default ScoreScreen;