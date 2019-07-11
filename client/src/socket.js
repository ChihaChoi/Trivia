import io from 'socket.io-client'


var socket = io('localhost:8081/')

var ipv4Address = null

if (ipv4Address){
    socket = io(`${ipv4Address}:8081`)
}



export default socket;