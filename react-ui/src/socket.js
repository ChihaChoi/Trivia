import io from "socket.io-client";

var socket = io("localhost:4000");

// var ipv4Address = null

// if (ipv4Address){
//     socket = io(`${ipv4Address}:${PORT}`)
// }

export default socket;
