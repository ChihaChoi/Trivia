PORT = 8081

const express = require('express')
const app = express()
// app.use(express.static(__dirname + "/public"))
const expressServer = app.listen(process.env.PORT || PORT)

const socketio = require('socket.io')
const io = socketio(expressServer)


module.exports = {io}