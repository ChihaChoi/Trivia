const io = require('./server').io
const request = require('request')


const players = [];
let playerNames = []


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
timer= 0
setInterval(()=>{
    timer++
    if (timer > 20){
        sendTrivia()
        timer=0
    } else if (timer ===14){
        sendPlayerData()
        sendPlayerAnswers()
    }
    io.emit('time',timer)
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
        sendPlayerData()

        //lists all logged players in console
        players.forEach((ele,i)=>{
            console.log(i,"--",ele.name,ele.photo)
        })
    })

    //Collect player answers
    
    socket.on('answer',(answer,player)=>{
        if (answer!=""){
            if(answer==correctAns){
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
    io.emit('answers',currentRoundAnswers, correctAns)
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


// requests trivia question and answers from api, and inserts correct answers at random index correctAns
var currentRoundAnswers=[[],[],[],[]]
var correctAns = ""
function sendTrivia(){
    correctAns = Math.floor(Math.random()*4);
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
                
                //insert correct answer randomly into list of answers
                answers.splice(correctAns,0,data[0].correct_answer)
                
                io.emit('question',question, answers)
                console.log(question)
                
            }
        }
    });

}

//returns object with name : nameKey from myArray
function findName(nameKey,myArray){
    for (var i=0 ; i<myArray.length ; i++){
        if(myArray[i].name === nameKey){
            return myArray[i];
        }
    }
    console.log("failed to find")
    return 0
}
//returns index of nameKey in myArray
function findNameIndex(nameKey,myArray){
    for (var i=0 ; i<myArray.length ; i++){
        if(myArray[i].name === nameKey){
            return i;
        }
    }
    console.log("failed to find")
    return 0
}



module.exports = io
