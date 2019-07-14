import io from 'socket.io-client'

var PORT = 8081
var socket = io()

var ipv4Address = null

if (ipv4Address){
    socket = io(`${ipv4Address}:${PORT}`)
}



export default socket;