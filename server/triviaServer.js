const io = require('./server').io
const request = require('request')

var players = [];


const answerLength = 6
const questionLength = 14
const animationLength = 3


class Player{
    constructor(PlayerName,PlayerSocket,PlayerPhoto){
        this.name = PlayerName;
        this.socketId = PlayerSocket;
        this.photo = PlayerPhoto;
        this.score = 0;
    }}
class PlayerData{
        constructor(PlayerName,PlayerPhoto,PlayerScore){
            this.name = PlayerName;
            this.photo = PlayerPhoto;
            this.score = PlayerScore;
        }}

//global timer=============
var timer= 1
var mode = 'question'
setInterval(()=>{
    timer--
    if(timer < 0){

        if (mode === 'answer'){
            sendTrivia()
            
            timer= questionLength + animationLength
            mode = 'question'
        } else if (mode === 'question'){
            sendPlayerData()
            sendPlayerAnswers()
            
            mode = 'answer'
            timer= answerLength + animationLength
        }
    }
    io.emit('time',timer,mode)
},1000)
//=========================


io.on('connection',(socket)=>{
    //Collect player info ==========================
    socket.on('info',(playerName,playerPhoto)=>{
        console.log(playerName)
        //add connected player's details to the list of players if not already in there
        if(findName(playerName,players)=== 0){
            let player = new Player(playerName,socket,playerPhoto)
            players.push(player);
        } else {
            //if player is in player list, then just update their socket and photo
            findName(playerName,players).socketId=socket;
            findName(playerName,players).photo=playerPhoto;
        }
        //update all clients' player list after every new player submission
        setInterval(()=>{
            sendPlayerData()
            //[duct tape fix] wait for 1 second for TriviaMain to load and receive player data
        },1000)

        //lists all logged players in console
        players.forEach((ele,i)=>{
            console.log(i,"--",ele.name,ele.photo)
        })
    })

    //Collect player answers
    
    socket.on('answer',(answer,player)=>{
        if (answer!=""){
            //add to score if player answered correctly
            if(answer==correctAnswer){
                findName(player, players).score++
            }
            console.log(players)
            currentRoundAnswers[answer].push(player)
        }
        console.log(currentRoundAnswers)

        //need to move
        sendPlayerData()
        sendPlayerAnswers()
        //============
    })
    
    //=============================

    socket.on("LOG",()=>console.log("LOGGING"))

    //change color of devices UNFINISHED==
    socket.on('tempcol',color=>io.emit('changeColor',color))
    //====================================

})

function sendPlayerAnswers(){
    io.emit('answers',currentRoundAnswers, correctAnswer)
}

//socket can not emit socketID so use this func to emit a clone without socketId
function sendPlayerData(){
    let playersToEmit = []
    players.forEach((ele,i)=>{
        let newPlayer = new PlayerData(ele.name,ele.photo,ele.score)
        playersToEmit.push(newPlayer)
    })
    io.emit('playerData',playersToEmit)
}


var currentRoundAnswers=[[],[],[],[]]
var correctAnswer = ""
// requests trivia question and answers from api, and inserts correct answers at random index correctAnswer
function sendTrivia(){
    correctAnswer = Math.floor(Math.random()*4);
    currentRoundAnswers=[[],[],[],[]];
    
    request('https://opentdb.com/api.php?amount=1&type=multiple', function(error, response, body){
        if(error){
            console.log("error error beep boop can not fetch trivia api");
            console.log(error);
        } else {
            if(response.statusCode === 200){
                //splits the api data into question and answers
                let parsedData = JSON.parse(body);
                let data = parsedData.results;
                
                let question = data[0].question;
                var answers = data[0].incorrect_answers;
                let category = data[0].category;
                
                //insert correct answer randomly into list of answers
                answers.splice(correctAnswer,0,data[0].correct_answer)
                
                io.emit('question',question, answers, category)
                console.log(question)
                
            }
        }
    });

}

//returns object with name = nameKey from myArray
function findName(nameKey,myArray){
    for (var i=0 ; i<myArray.length ; i++){
        if(myArray[i].name === nameKey){
            return myArray[i];
        }
    }
    console.log("failed to find")
    return 0
}

const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '../react-ui/build')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../react-ui/build', 'index.html'));
});

app.listen(process.env.PORT || 9000);

