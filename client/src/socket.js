import io from 'socket.io-client'

var socket = io('http://192.168.0.93:8080/')

export default socket;